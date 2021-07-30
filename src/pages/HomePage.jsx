import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';
import Container from '../components/Container/Container';

const useStyles = createUseStyles({
  Page__box: {
    width: 450,
    padding: [5, 10],
  },
  Page__title: {
    fontSize: '1.2rem',
    margin: [10, 'auto'],
  },
  Paragraph: {
    fontSize: '1rem',
    lineHeight: 1.5,
  },
});

const HomePage = () => {
  const classes = useStyles();
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Container>
      <h3 className={classes.Page__title}>Welcome to the Phonebook!</h3>

      <div className={classes.Page__box}>
        <p className={classes.Paragraph}>
          {' '}
          This application makes easier to save your contacts and gets them
          using your browser.
        </p>

        {!isLoggedIn && (
          <p className={classes.Paragraph}>
            For using this Phonebook safely please get your own account on{' '}
            <a href="/registration"> Registration Page</a> or just{' '}
            <a href="/login">Login</a> if your already have account.
          </p>
        )}
        <p className={classes.Paragraph}>Enjoy :)</p>
      </div>
    </Container>
  );
};

export default HomePage;
