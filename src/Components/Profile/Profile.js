import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Avatar,
  UserDescription,
  Stats,
  StatsItem,
} from './Profile.styled';

const Profile = ({ avatar, username, tag, location, followers, views, likes }) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserDescription>{username}</UserDescription>
        <UserDescription>@{tag}</UserDescription>
        <UserDescription>{location}</UserDescription>
      </Description>

      <Stats>
        <StatsItem>
          <span>Followers</span>
          <span>{followers}</span>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <span>{views}</span>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <span>{likes}</span>
        </StatsItem>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
