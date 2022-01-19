import PropTypes from 'prop-types';
import { TransTableTd, TransHistory, TransTableHead } from './Transaction.styles';

const TransactionHistory = ({ items }) => {
  return (
    <TransHistory>
      <thead>
        <tr>
          <TransTableHead>Type</TransTableHead>
          <TransTableHead>Amount</TransTableHead>
          <TransTableHead>Currency</TransTableHead>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <TransTableTd>{type}</TransTableTd>
            <TransTableTd>{amount}</TransTableTd>
            <TransTableTd>{currency}</TransTableTd>
          </tr>
        ))}
      </tbody>
    </TransHistory>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.object,
};

export default TransactionHistory;
