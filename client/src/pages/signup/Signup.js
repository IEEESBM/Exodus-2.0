import './Signup.css'
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import Nav from '../../componenets/Nav';
function Signup() {
  return (
    <>
    <Nav />
      <div className='background'>
        <div className='signup-container'>
          <div className='signup-image'></div>
          <div className='signup'>
            <div>
              <h1>Sign Up</h1>
              <form action="#">
              <div className='email'>
                  <div>
                    <AiOutlineUser className='username-icon'></AiOutlineUser>
                  </div>
                  <div>
                    <label htmlFor="username">Username</label> 
                    <br />
                    <input required type="username" id="username" name="username" />
                    <span className='username-error'>error</span>
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

                <button>Sign Up</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;