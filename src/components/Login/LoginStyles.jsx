import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  Form__box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 450,
    margin: [5, 'auto'],
    padding: 10,
    border: [2, 'solid', '#e0e8e5'],
    borderRadius: 8,
    backgroundColor: '#f6fafb',
  },

  Form__submit: {
    width: '75%',
    height: '2.2rem',
    padding: '0.25rem',
    border: [3, 'solid', '#e0e8e5'],
    borderRadius: 8,
    outline: 'none',

    textTransform: 'uppercase',
    fontWeight: 700,
    color: '#FFFFFF',
    backgroundColor: '#597387',
    cursor: 'pointer',
    overflow: 'hidden',

    transition: 'transform 250ms linear',

    '&:hover, &:focus': {
      transform: 'scale(1.02)',
    },

    '&:disabled': {
      opacity: 0.3,
    },
  },
});
