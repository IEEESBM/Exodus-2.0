import './Signup.css';
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../../actions/auth";
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from "react-icons/ai";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 4 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 4 and 40 characters.
      </div>
    );
  }
};

function Signup() {
  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [college,setCollege] = useState("");
  const [phoneno,setPhoneno] = useState(0);
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeCollege = (e) => {
    const college = e.target.value;
    setCollege(college);
  };

  const onChangePhoneno = (e) => {
    const phoneno = e.target.value;
    setPhoneno(phoneno);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(name, email, password,college,phoneno))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <>
      <div className='background'>
        <div className='signup-container'>
          <div className='signup-image'></div>
          <div className='signup'>
            <div>
              <h1>Sign Up</h1>
              <Form onSubmit={handleRegister} ref={form}>
              {!successful && (
                <>
              <div className='email'>
                  <div>
                    <AiOutlineUser className='username-icon'></AiOutlineUser>
                  </div>
                  <div>
                    <label htmlFor="name">Username</label> 
                    <br />
                    <Input
                  type="text"
                  // className="form-control"
                  name="name"
                  value={name}
                  onChange={onChangeName}
                  validations={[required, vname]}
                />
                    {/* <span className='username-error'>error</span> */}
                  </div>
                </div>

                <div className='email'>
                  <div>
                    <AiOutlineMail className='email-icon'></AiOutlineMail>
                  </div>
                  <div>
                    <label htmlFor="email">Email</label> 
                    <br />
                    <Input
                  type="text"
                  // className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
                    {/* <span className='email-error'>error</span> */}
                  </div>
                </div>

                <div className='college'>
                  <div>
                    <AiOutlineUser className='username-icon'></AiOutlineUser>
                  </div>
                  <div>
                    <label htmlFor="college">College</label> 
                    <br />
                    <Input
                  type="text"
                  // className="form-control"
                  name="college"
                  value={college}
                  onChange={onChangeCollege}
                  validations={[required]}
                />
                    {/* <span className='username-error'>error</span> */}
                  </div>
                </div>

                <div className='phoneno'>
                  <div>
                    <AiOutlineUser className='username-icon'></AiOutlineUser>
                  </div>
                  <div>
                    <label htmlFor="phoneno">Mobile No</label> 
                    <br />
                    <Input
                  type="number"
                  // className="form-control"
                  name="phoneno"
                  value={phoneno}
                  onChange={onChangePhoneno}
                  validations={[required]}
                />
                    {/* <span className='username-error'>error</span> */}
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
                  // className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
                    {/* <span className='password-error'>error</span> */}
                  </div>
                </div>

                <button className="signup-button">Register</button>
                </>
              )}
              {successful &&(
                <div>
                  <p>Verification Email Sent</p>
                </div>
              )}
              {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
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

export default Signup;