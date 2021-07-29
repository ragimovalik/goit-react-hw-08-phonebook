import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/auth-operations';
import FormikInput from '../FormikInput/FormikInput';
import { useEffect } from 'react';

const Registration = () => {
  const [registrationData, setRegistrationData] = useState({});
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    setRegistrationData(values);

    resetForm();
  };

  useEffect(() => {
    registrationData.name && dispatch(register(registrationData));
  }, [registrationData, dispatch]);

  return (
    <div>
      <h4>Formik form</h4>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Name should be longer')
            .max(15, 'Maximum 15 characters')
            .required('This field is required'),
          email: Yup.string()
            .email('Please enter valid email')
            .required('This field is required'),
          password: Yup.string()
            .min(7, 'Minimum 7 characters')
            .required('This field is required'),
        })}
        onSubmit={onSubmit}
      >
        {formik => (
          <Form>
            <FormikInput
              label="Name:"
              name="name"
              placeholder="John"
              // type="text"
              // title="name"
            />
            <FormikInput
              label="Email:"
              name="email"
              type="email"
              placeholder="test@test.com"
            />
            <FormikInput
              label="Password:"
              name="password"
              type="password"
              placeholder="******"
            />

            <div>
              <span>Screen: </span>
            </div>
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
    </div>
  );
};

export default Registration;
