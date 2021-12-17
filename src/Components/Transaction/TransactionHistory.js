import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <tr>
      <td>{items.type}</td>
      <td>{items.amount}</td>
      <td>{items.currency}</td>
    </tr>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.object,
};

export default TransactionHistory;
