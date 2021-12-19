import './App.css';
import { Title, StatList, TransHistory, TransTableHead } from './App.styled';
import Profile from './Components/Profile/Profile';
import user from './Components/Profile/user.json';
import Statistic from './Components/Statistics/Statistic';
import data from './Components/Statistics/data.json';
import FriendList from './Components/FriendList/FriendList';
import TransactionHistory from './Components/Transaction/TransactionHistory';
import transactions from './Components/Transaction/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Title>Upload stats</Title>
      <StatList>
        {data.map(statistic => (
          <Statistic key={statistic.id} title={statistic.label} stats={statistic.percentage} />
        ))}
      </StatList>
      <FriendList />

      <TransHistory>
        <thead>
          <tr>
            <TransTableHead>Type</TransTableHead>
            <TransTableHead>Amount</TransTableHead>
            <TransTableHead>Currency</TransTableHead>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transactions => (
            <TransactionHistory key={transactions.id} items={transactions} />
          ))}
        </tbody>
      </TransHistory>
    </div>
  );
}
