import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

function LoginForm({values, errors, touched}) {
  return (
    <Form>
      <div>
        <Field type='text' name="name" placeholder="Name" />
        {touched.name && errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <Field type='email' name="email" placeholder="Email" />
        {touched.email && errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <Field type='password' name="password" placeholder="Password" />
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>
      <label>
        <span>Accept TOS</span>
        <Field type='checkbox' name="tos" checked={values.tos} />
      </label>
      <button>Submit</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({name, email, password, tos}){
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      tos: tos || false
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Email is not valid').required('Email is required'),
    password: Yup.string().min(8, 'Password length must be 8 characters or longer')
    .required('Password is required')
  }),
})(LoginForm);

export default FormikLoginForm;
