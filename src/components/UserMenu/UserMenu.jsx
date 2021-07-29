import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';

const UserMenu = () => {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(logOut());

  return (
    <div style={{ display: 'flex' }}>
      <p>
        Welcome <span>{userName}</span>
      </p>
      <button type="button" onClick={handleClick}>
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
