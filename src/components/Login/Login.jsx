import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/auth-operations';
import FormikInput from '../FormikInput/FormikInput';
import { useEffect } from 'react';
import { useStyles } from './LoginStyles';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSubmit = (values, { onSubmitting, resetForm }) => {
    setLoginData(values);

    resetForm();

    setLoginData({});
  };

  useEffect(() => {
    loginData.email && dispatch(logIn(loginData));
  }, [loginData, dispatch]);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Please enter valid email')
          .required('This field is required'),
        password: Yup.string()
          .min(7, 'Minimum 7 characters')
          .required('Required field'),
      })}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Form className={classes.Form__box}>
          <FormikInput
            name="email"
            label="Email:"
            type="email"
            placeholder="test@test.com"
          />
          <FormikInput
            name="password"
            label="Password:"
            type="password"
            placeholder="*******"
          />
          <input
            disabled={!formik.isValid || formik.isSubmitting}
            type="submit"
            value="submit"
            name="submit"
            className={classes.Form__submit}
          />
        </Form>
      )}
    </Formik>
  );
};

export default Login;
