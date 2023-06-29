import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import '../styles/login.css';
import Footer from './Footer';
import { useEffect } from 'react';

const Login = () => {
  const { googleSignIn, user } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const goToSignup = useNavigate();
  const userDashboard = useNavigate();

  useEffect(() => {
    if (user != null) {
      userDashboard('/dashboard');
    }
  }, [user]);

  return (
    <div>
      <div className="login-container">
        <div className="loginTwo">
          <p className="loginWith">Log in with</p>
          <button className="google" onClick={handleGoogleSignIn}>
            Google
          </button>
          <p style={{ marginBottom: '0.7rem' }}>Or</p>
          <div className="inputs">
            <div className="emailInput">
              <input type="email" placeholder="Email address or username" />
            </div>
            <div className="passwordInput">
              <input type="password" placeholder="Password" />
            </div>
            <button className="loginBtn">Log in</button>
          </div>
          <p>
            Don't have an account ?
            <span
              style={{ color: '#0065fe', cursor: 'pointer' }}
              onClick={() => goToSignup('/signup')}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
