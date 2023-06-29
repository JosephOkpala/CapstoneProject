import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Signup = () => {
  const goToLogin = useNavigate();
  return (
    <div>
      <div className="login-container">
        <div className="loginTwo">
          <p className="loginWith">Sign up with:</p>
          <button className="google">Google</button>
          <p style={{ marginBottom: '0.7rem' }}>Or</p>
          <div className="inputs">
            <div className="emailInput">
              <input type="text" placeholder="Username" />
            </div>
            <div className="emailInput">
              <input type="email" placeholder="Email" />
            </div>
            <div className="passwordInput">
              <input type="password" placeholder="Password" />
            </div>
            <div className="passwordInputTwo">
              <input type="password" placeholder="Retype password" />
            </div>
            <button className="loginBtn">Sign up with Email</button>
          </div>
          <p>
            Already have an account ?
            <span
              style={{ color: '#0065fe', cursor: 'pointer' }}
              onClick={() => goToLogin('/login')}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
