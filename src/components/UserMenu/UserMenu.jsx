import { useSelector, useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { AiOutlineExport } from 'react-icons/ai';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';

const useStyles = createUseStyles({
  Flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  User__greetings: {
    marginRight: 10,
  },
  User__name: {
    marginLeft: 5,
    textDecoration: 'underline',
    fontStyle: 'italic',
    textTransform: 'uppercase',
  },
});

const UserMenu = () => {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClick = () => dispatch(logOut());

  return (
    <div className={classes.Flex}>
      <p className={[classes.Flex, classes.User__greetings].join(' ')}>
        Welcome <span className={classes.User__name}>{userName}</span>
      </p>
      <button type="button" onClick={handleClick}>
        <AiOutlineExport style={{ fontSize: '1.2rem' }} />
      </button>
    </div>
  );
};

export default UserMenu;
