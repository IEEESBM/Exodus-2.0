import './Signup.css'
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { click } from '../../redux/signupSlice';

function Signup() {
  
  const value = useSelector((state)=> state.signup.value)
  const dispatch = useDispatch();

  function press(){
    console.log(click);
    dispatch(click());
  }

  return (
    <>
      <div className='background'>
        <div className='signup-container'>
          <div className='signup-image'></div>
          <div className='signup'>
            <div>
              <h1 onClick={press}>Sign Up</h1>
              <form>
              <div className='email'>
                  <div>
                    <AiOutlineUser className='username-icon'></AiOutlineUser>
                  </div>
                  <div>
                    <label htmlFor="username">Username</label> 
                    <br />
                    <input required type="username" id="username" name="username" />
                    <span className='username-error'>{value}</span>
                  </div>
                </div>

                <div className='email'>
                  <div>
                    <AiOutlineMail className='email-icon'></AiOutlineMail>
                  </div>
                  <div>
                    <label htmlFor="email">Email</label> 
                    <br />
                    <input required type="email" id="email" name="email" />
                    <span className='email-error'>error</span>
                  </div>
                </div>

                <div className='password'>
                  <div>
                    <AiOutlineLock className='password-icon'></AiOutlineLock>
                  </div>
                  <div>
                    <label htmlFor="password">Password</label> 
                    <br />
                    <input required type="password" id="password" name="password" />
                    <span className='password-error'>error</span>
                  </div>
                </div>

                <button className="signup-button">Sign Up</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;