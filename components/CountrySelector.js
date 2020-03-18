import { useState } from 'react';

import useStats from '../utils/useStats';
import Stats from './Stats';

export default function CountrySelector() {
  const {stats: countries, loading, error} = useStats('https://covid19.mathdro.id/api/countries');
  const [selectedCountry, setSelectedCountry] = useState('CAN');

  if (!countries) return <p>Loading...</p>
  if (loading) return <p>Loading...</p>
  if (error) return <p>Loading...</p>

  return (
    <div>
      <h2>Currently Showing {selectedCountry}</h2>
      <select onChange={e => {
        setSelectedCountry(e.target.value);
      }} value={selectedCountry}>
        {Object.entries(countries.countries).map(([country, code], index) => (
          <option key={code + "-" + index} value={countries.iso3[code]}>{country}</option>
        ))}
      </select>
      <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`} />
    </div>
  )

  
}