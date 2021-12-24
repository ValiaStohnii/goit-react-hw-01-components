import FriendsListItem from '../FriendList/FriendListItem';
import { List } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friends => (
        <FriendsListItem
          key={friends.id}
          avatar={friends.avatar}
          name={friends.name}
          isOnline={friends.isOnline}
        />
      ))}
    </List>
  );
};

export default FriendList;
