import PropTypes from 'prop-types';
import { TransTableTd } from './Transaction.styles';

const TransactionHistory = ({ items }) => {
  return (
    <tr>
      <TransTableTd>{items.type}</TransTableTd>
      <TransTableTd>{items.amount}</TransTableTd>
      <TransTableTd>{items.currency}</TransTableTd>
    </tr>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.object,
};

export default TransactionHistory;
