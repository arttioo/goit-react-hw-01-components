import PropTypes from 'prop-types';
import { ProfileAvatar, List, Stats, Quantity } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className="profile">
      <div className="description">
        <ProfileAvatar src={avatar} alt={username} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <Stats>
        <List>
          <span className="label">Followers</span>
          <Quantity>{followers}</Quantity>
        </List>
        <List>
          <span className="label">Views</span>
          <Quantity>{views}</Quantity>
        </List>
        <List>
          <span className="label">Likes</span>
          <Quantity>{likes}</Quantity>
        </List>
      </Stats>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
