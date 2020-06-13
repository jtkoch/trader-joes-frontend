import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginForm = ({ errors, touched, values, status }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  console.log(user)

  useEffect(() => {
    status && setUser(status);
  }, [status])

  return (
    <div className="login-form">
      <h1>Welcome!</h1>
      <h2>Let's get a shopping list started!</h2>
      <Form>
        <h1>Please Sign In</h1>
        <Field name="username" type="text" value={values.username} placeholder="username" ></Field>
        {touched.username && errors.username && <p>{errors.username}</p>}

        <Field name="password" type="password" value={values.password} placeholder="password" ></Field>
        {touched.password && errors.password && <p>{errors.password}</p>}

        <div>
          <p>Not A Member? <Link to="/Register">Register</Link></p>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
  )
}

const FormikLoginForm = withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password required"),
  }),


  handleSubmit(values, { resetForm, setStatus, props }) {
    console.log("Submitting form:", values);

    axios
      .post("https://trader-joes-shopping-list.herokuapp.com/api/auth/login", values)

      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        resetForm();
        setStatus(res.data);
        props.history.push('/mainui');
      })
  }
})(LoginForm);

export default FormikLoginForm;