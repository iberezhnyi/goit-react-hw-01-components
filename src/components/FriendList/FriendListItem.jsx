import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class={css.item}>
      <span class={isOnline ? css.online : css.offline}>{isOnline}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
