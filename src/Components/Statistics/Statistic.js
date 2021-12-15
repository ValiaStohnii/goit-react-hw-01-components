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
export default Statistic;
