import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import GoogleButton from 'react-google-button';
import '../styles/login.css';
import Footer from './Footer';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login page on scissors" />
      </Helmet>
      <div className="login-container">
        <div className="loginTwo">
          <p className="loginWith">Sign in with:</p>
          <div className="google">
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
          {/* <p style={{ marginBottom: '0.7rem' }}>Or</p>
          <div className="inputs">
            <div className="emailInput">
              <input type="email" placeholder="Email address or username" />
            </div>
            <div className="passwordInput">
              <input type="password" placeholder="Password" />
            </div>
            <button className="loginBtn">Log in</button>
          </div> */}
          <p style={{ marginBottom: '1rem' }}>
            Don't have an account ?
            <span
              style={{ color: '#0065fe', cursor: 'pointer' }}
              onClick={() => goToSignup('/signup')}
            >
              Sign up
            </span>
          </p>
          <p className="policy">
            By signing in with an account, you agree to Sciccor's
            <span> Terms of Service</span>, <span> Privacy Policy</span> and
            <span> Acceptable Use Policy</span>.
          </p>
        </div>
        H
      </div>
      <Footer />
    </div>
  );
};

export default Login;
