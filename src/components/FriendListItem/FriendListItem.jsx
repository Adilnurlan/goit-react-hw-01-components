import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export const FriendListItem = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <li className={s.item}>
      <span className={isOnline ? `${s.isOnline}` : `${s.isOffline}`}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.object,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
