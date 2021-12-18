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
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </StatsItem>
        <StatsItem>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </StatsItem>
        <StatsItem>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
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
