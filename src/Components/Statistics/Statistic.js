import PropTypes from 'prop-types';

const Statistic = ({ title, stats }) => {
  return (
    <section class="statistics">
      <ul class="stat-list">
        <li class="item">
          <span class="label">{title}</span>
          <span class="percentage">{stats}</span>
        </li>
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.number,
};

export default Statistic;
