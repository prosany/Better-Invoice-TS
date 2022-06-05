import React, { useState } from "react";
import styles from "Styles/authentication.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginSchema from "Schema/loginSchema";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [remember, setRemember] = useState(false);
  const initalState = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const handleChange = () => {
    setRemember(!remember);
  };
  return (
    <React.Fragment>
      <div className={styles.body}>
        <main className={styles.main}>
          <div className={styles.login_haeders}>
            <span className={styles.green_bg}>
              <i className="far fa-sign-in"></i>
            </span>
            <span className={styles.heading_text}>
              <strong>Log in</strong>
            </span>
          </div>
          <p className={styles.benefit}>
            Become a user - you can create professional invoice, resume, and you
            can access our developers API.
          </p>
          <hr className="hr_tag" />
          <div className={styles.login_form}>
            <Formik
              initialValues={initalState}
              validationSchema={loginSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="w_100">
                    <label htmlFor="email" className="form_label">
                      Email <span className="required">*</span>
                    </label>
                    <Field
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      className={
                        errors.email && touched.email
                          ? "form_error form_control"
                          : "form_control"
                      }
                    />
                    <p className="error_texts">
                      <ErrorMessage name="email" />
                    </p>
                  </div>
                  <div className="w_100">
                    <label htmlFor="password" className="form_label">
                      Password <span className="required">*</span>
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      className={
                        errors.password && touched.password
                          ? "form_error form_control"
                          : "form_control"
                      }
                    />
                    <p className="error_texts">
                      <ErrorMessage name="password" />
                    </p>
                  </div>
                  <div className={styles.justify_bt}>
                    <div onClick={handleChange}>
                      {remember ? (
                        <i className="fas fa-check-square checked"></i>
                      ) : (
                        <i className="far fa-square"></i>
                      )}
                      <span>Remember me</span>
                    </div>
                    <Link to="/signup">Forgot password?</Link>
                  </div>
                  <div className="mt-3">
                    <button type="submit" className="form_submit">
                      Log in
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <p className="text_center">Or</p>
            <div className={styles.social_login}>
              <button className={styles.google_login} type="button">
                <i className="fab fa-google"></i>Google
              </button>
              <button className={styles.facebook_login} type="button">
                <i className="fab fa-facebook"></i>Facebook
              </button>
            </div>
          </div>
          <hr className="hr_tag" />
          <div className={styles.useful_link}>
            <p>Don't have an account?</p>
            <Link to="/signup">Sign up</Link>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Login;
