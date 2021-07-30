import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  Form__input__wrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
    padding: [0, 10],
    textAlign: 'center',

    fontStyle: 'italic',
    fontWeight: 400,
    lineHeight: 1.2,
    fontFamily: 'inherit',

    fontSize: '0.9rem',
  },
  Form__label: {
    width: 70,
    marginRight: 10,
    textAlign: 'start',
  },

  Form__input: {
    width: '100%',
    height: '1.4rem',
    outline: 'none',
    border: [2, 'solid', '#e0e8e5' /*'#597387'*/],
    borderRadius: 4,
    paddingLeft: 8,

    transition: 'all 250ms linear',
    '&:hover, &:focus': {
      border: [2, 'solid', '#a8beb6' /*'#597387'*/],
    },
  },
});
