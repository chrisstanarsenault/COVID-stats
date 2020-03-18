import useStats from '../utils/useStats';
import convertTime from '../utils/convertTime';
import convertDate from '../utils/convertDate';

import styled from 'styled-components';

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const StatBlock = styled.div`
  background: #f2f2f2;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default function Stats({url}) {
  const { stats } = useStats(url);
  if (!stats) return <p>Loading...</p>

  return (
    <StatGrid>
      <StatBlock className="statBlock">
        <h3>Confirmed:</h3>
        <span>{stats.confirmed.value}</span>
      </StatBlock>

      <StatBlock className="statBlock">
        <h3>Deaths:</h3>
        <span>{stats.deaths.value}</span>
      </StatBlock>

      <StatBlock className="statBlock">
        <h3>Recovered:</h3>
        <span>{stats.recovered.value}</span>
      </StatBlock>

      <h2>Last Updated: {convertDate(stats.lastUpdate.substring(0, 10))} @ {convertTime(stats.lastUpdate.substring(11, 16))}</h2>
    </StatGrid>
  )
}