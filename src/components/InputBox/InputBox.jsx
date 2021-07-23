import PropTypes from 'prop-types';
import styles from './InputBox.module.css';

const InputBox = ({
  htmlFor,
  type,
  id,
  name,
  title,
  pattern,
  placeholder,
  required,
  value,
  labelText,
  onChange,
}) => {
  const patternText =
    "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
  const patternPhone = '^[+]{0,1}[ .()0-9-]{3,8}[0-9. -]{3,11}$';
  // '/(+?( |-|.)?d{1,2}( |-|.)?)?((?d{3})?|d{3})( |-|.)?(d{3}( |-|.)?d{4})/';

  return (
    <div className={styles.Form__wrap}>
      <label htmlFor={htmlFor} className={styles.Form__label}>
        <span>{labelText}</span>
      </label>

      <input
        className={styles.Form__input}
        type={type}
        id={id}
        name={name}
        title={title}
        pattern={pattern === 'text' ? `${patternText}` : `${patternPhone}`}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

InputBox.defaultProps = {
  title: 'Please enter some text',
  required: true,
  labelText: 'Label for -->',
};

InputBox.propTypes = {
  htmlFor: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  labelText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}.isRequired;

export default InputBox;
