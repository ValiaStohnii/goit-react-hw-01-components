import PropTypes from 'prop-types';
import { StatIlem, Label } from './Statistics.styled';

const Statistic = ({ title, stats }) => {
  return (
    <StatIlem>
      <Label>{title}</Label>
      <span class="percentage">{stats}%</span>
    </StatIlem>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.number,
};

export default Statistic;
