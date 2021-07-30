import PropTypes from 'prop-types';
import { CgSpinnerTwo } from 'react-icons/cg';
import styles from './Spinner.module.css';

const Spinner = ({ size }) => (
  <div className={styles.Spinner__wrapper}>
    <CgSpinnerTwo className={styles.Animated} size={size} />
  </div>
);

Spinner.defaultProps = {
  size: '3rem',
};

Spinner.propTypes = {
  size: PropTypes.string,
};

export default Spinner;
