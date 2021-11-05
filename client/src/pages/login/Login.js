import './Login.css';
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

function Login(props) {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          props.history.push("/dashboard");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
      <div className='background'>
        <div className='login-container'>
          <div className='login-image'></div>
          <div className='login'>
            <div>
              <h1>Log In</h1>
              <Form onSubmit={handleLogin} ref={form}>
                <div className='email'>
                  <div>
                    <AiOutlineMail className='email-icon'></AiOutlineMail>
                  </div>
                  <div>
                    <label htmlFor="email">Email</label> 
                    <br />
                    <Input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={onChangeEmail}
              validations={[required]}
            />
                    {/* <span className='email-error'>error</span> */}
                  </div>
                </div>

                <div className='password'>
                  <div>
                    <AiOutlineLock className='password-icon'></AiOutlineLock>
                  </div>
                  <div>
                    <label htmlFor="password">Password</label> 
                    <br />
                    <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
                    <span className='password-error'>error</span>
                  </div>
                </div>

                <button>Log In</button>

                {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Login;