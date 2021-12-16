import PropTypes from 'prop-types';

const Statistic = ({ title, stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">{title}</span>
          <span class="percentage">{stats}</span>
        </li>
        <li class="item">
          <span class="label">{title}</span>
          <span class="percentage">{stats}</span>
        </li>
        <li class="item">
          <span class="label">{title}</span>
          <span class="percentage">{stats}</span>
        </li>
        <li class="item">
          <span class="label">{title}</span>
          <span class="percentage">{stats}</span>
        </li>
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  title: PropTypes.array,
  stats: PropTypes.array,
};

export default Statistic;
