import FriendsListItem from '../FriendList/FriendListItem';
import friends from './friends.json';

const FriendList = () => {
  return (
    <ul class="friend-list">
      {friends.map(friends => (
        <FriendsListItem
          key={friends.id}
          avatar={friends.avatar}
          name={friends.name}
          isOnline={friends.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
