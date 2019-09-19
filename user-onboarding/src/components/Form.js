import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

function LoginForm({values, errors, touched}) {
  return (
    <Form>
      <div>
        <Field type='text' name="name" placeholder="Name" />
      </div>
      <div>
        <Field type='email' name="email" placeholder="Email" />
      </div>
      <div>
        <Field type='password' name="password" placeholder="Password" />
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
})(LoginForm);

export default FormikLoginForm;
