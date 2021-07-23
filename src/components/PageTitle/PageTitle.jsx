import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  PageTitle: {
    marginBottom: 20,
    padding: 10,
    textAlign: 'center',
    color: '#252b31',
  },
});

const PageTitle = ({ title }) => {
  const classes = useStyles();

  return <h1 className={classes.PageTitle}>{title}</h1>;
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
