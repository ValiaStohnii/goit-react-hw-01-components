import PropTypes from 'prop-types';
import { FriendsItem, FriendsStatus, FriendsAvatar } from './FriendList.styled';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <FriendsStatus isOnline={isOnline}></FriendsStatus>
      <FriendsAvatar src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </FriendsItem>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendsListItem;
