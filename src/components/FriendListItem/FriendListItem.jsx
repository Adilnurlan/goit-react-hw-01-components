import s from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friends: { avatar, name, isOnline } }) => {
  <li className={s.item}>
    <span className={isOnline ? `${s.online}` : `${s.offline}`}></span>
    <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={s.name}>{name}</p>
  </li>;
};

FriendListItem.propTypes = {
  friends: PropTypes.object,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
