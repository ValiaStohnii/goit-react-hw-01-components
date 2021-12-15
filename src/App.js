import './App.css';
import Profile from './Components/Profile/Profile';
import user from './Components/Profile/user.json';
import Statistic from './Components/Statistics/Statistic';
import data from './Components/Statistics/data.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.followers}
        likes={user.stats.followers}
      />
      ;
      <Statistic title={data.label} stats={data.percentage} />;
      <Statistic stats={data.percentage} />;
    </div>
  );
}
