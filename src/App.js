import './App.css';
import Profile from './Components/Profile/Profile';
import user from './Components/Profile/user.json';
import Statistic from './Components/Statistics/Statistic';
import data from './Components/Statistics/data.json';
import FriendList from './Components/FriendList/FriendList';

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
      <h2 class="title">Upload stats</h2>
      {data.map(statistic => (
        <Statistic key={statistic.id} title={statistic.label} stats={statistic.percentage} />
      ))}
      <FriendList />
    </div>
  );
}
