import './Login.css'
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

function Login() {
  return (
    <>
      <div className='background'>
        <div className='login-container'>
          <div className='login-image'></div>
          <div className='login'>
            <div>
              <h1>Log In</h1>
              <form action="#">
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

                <button>Log In</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Login;