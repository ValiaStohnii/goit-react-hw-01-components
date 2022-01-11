import './App.css';
import Profile from './Components/Profile/Profile';
import user from './Components/Profile/user.json';
import StatisticList from './Components/Statistics/StatisticList';
import data from './Components/Statistics/data.json';
import FriendList from './Components/FriendList/FriendList';
import friends from './Components/FriendList/friends.json';
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

      <StatisticList title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}
