import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/auth-operations';
import FormikInput from '../FormikInput/FormikInput';
import { useEffect } from 'react';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const dispatch = useDispatch();

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
        <Form>
          <FormikInput name="email" label="Email:" type="email" />
          <FormikInput name="password" label="Password:" type="password" />
          <div>
            <input
              disabled={!formik.isValid || formik.isSubmitting}
              type="submit"
              value="submit"
              name="submit"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
