import { CgSpinnerTwo } from 'react-icons/cg';
import styles from './Spinner.module.css';

const Spinner = () => (
  <div>
    <CgSpinnerTwo className={styles.Animated} size={'3rem'} />
  </div>
);

export default Spinner;
