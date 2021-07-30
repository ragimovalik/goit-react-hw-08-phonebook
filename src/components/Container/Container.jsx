import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  Container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: [5, 'auto'],
    padding: [0, 10],
  },
});

const Container = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.Container}>{children}</div>;
};

export default Container;
