import PropTypes from 'prop-types';
import { StatSection, StatTitle, StatList, StatIlem, Label } from './Statistics.styled';

const StatisticList = ({ title, stats }) => {
  return (
    <StatSection>
      {title ? <StatTitle>{title}</StatTitle> : false}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatIlem key={id}>
            <Label>{label}</Label>
            <span>{percentage}%</span>
          </StatIlem>
        ))}
      </StatList>
    </StatSection>
  );
};
StatisticList.propTypes = {
  stats: PropTypes.array,
};
export default StatisticList;
