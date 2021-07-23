import { useDispatch, useSelector } from 'react-redux';
// import { setFilter } from '../../redux/slice';
import { setFilter } from '../../redux/actions';
import InputBox from '../InputBox/InputBox';
import styles from './Filter.module.css';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  // const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filterHandler = event => dispatch(setFilter(event.currentTarget.value));

  return (
    <div className={styles.Filter__wrap}>
      <h3 className={styles.Filter__title}>Search</h3>

      <InputBox
        labelText={'Find Name'}
        htmlFor={'filter'}
        type={'text'}
        id={'filter'}
        name={'filter'}
        pattern={'text'}
        placeholder={'Name'}
        required={false}
        value={filter}
        onChange={filterHandler}
      />
    </div>
  );
};

export default Filter;
