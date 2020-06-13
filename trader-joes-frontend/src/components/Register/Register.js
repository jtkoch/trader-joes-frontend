import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = ({ errors, touched, values, status }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: ""
  });

  console.log(user)

  useEffect(() => {
    status && setUser(status);
  }, [status]);

  return (
    <div className="register">
      <h1>Welcome!</h1>
      <h2>Let's get a shopping list started!</h2>
      <Form className="form register-form">
        <h1>Please Register</h1>
        <Field className="input" name="username" type="text" value={values.username} placeholder="username" ></Field>
        {touched.username && errors.username && <p>{errors.username}</p>}

        <Field className="input" name="password" type="text" value={values.password} placeholder="password" ></Field>
        {touched.password && errors.password && <p>{errors.password}</p>}

        <Field className="input" name="first_name" type="text" value={values.first_name} placeholder="first_name" ></Field>
        {touched.first_name && errors.first_name && <p>{errors.first_name}</p>}

        <Field className="input" name="last_name" type="text" value={values.last_name} placeholder="last_name" ></Field>
        {touched.last_name && errors.last_name && <p>{errors.last_name}</p>}

        <div>
          <p>Already A Member? <Link to="/Login">Sign In</Link></p>
          <button className="button" type="submit">Register</button>
        </div>
      </Form>
    </div>
  )
}

const FormikRegister = withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: "",
      first_name: "",
      last_name: ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password required"),
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
  }),

  handleSubmit(values, { resetForm, setStatus, props }) {
    console.log("Form Values ", values);

    axios
      .post("https://trader-joes-shopping-list.herokuapp.com/api/auth/register", values)

      .then(res => {
        console.log(res.data);
        resetForm();
        setStatus(res.data);
        props.history.push('/loginform');
        localStorage.setItem("userid", res.data.id);
      })
  }
})(Register);

export default FormikRegister;