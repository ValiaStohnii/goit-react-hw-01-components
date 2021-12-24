import PropTypes from 'prop-types';
import { StatList, StatIlem, Label } from './Statistics.styled';

const StatisticList = ({ stats }) => {
  return (
    <StatList>
      {stats.map(({ id, label, percentage }) => (
        <StatIlem key={id}>
          <Label>{label}</Label>
          <span>{percentage}%</span>
        </StatIlem>
      ))}
    </StatList>
  );
};
StatisticList.propTypes = {
  stats: PropTypes.array,
};
export default StatisticList;
