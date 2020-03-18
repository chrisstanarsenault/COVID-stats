import { useState } from 'react';
import styled from "styled-components";

import useStats from '../utils/useStats';

import Stats from './Stats';

const SelectInput = styled.select`
  border: 1px solid black;

  @media (max-width:400px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export default function CountrySelector() {
  const {stats: countries, loading, error} = useStats('https://covid19.mathdro.id/api/countries');
  const [selectedCountry, setSelectedCountry] = useState('CAN');

  if (!countries) return <p>Loading...</p>
  if (loading) return <p>Loading...</p>
  if (error) return <p>Loading...</p>

  return (
    <div>
      <h2>Currently Showing {selectedCountry}</h2>
      <SelectInput onChange={e => {
        setSelectedCountry(e.target.value);
      }} value={selectedCountry}>
        {Object.entries(countries.countries).map(([country, code], index) => (
          <option key={code + "-" + index} value={countries.iso3[code]}>{country}</option>
        ))}
      </SelectInput>
      <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`} />
    </div>
  )

  
}