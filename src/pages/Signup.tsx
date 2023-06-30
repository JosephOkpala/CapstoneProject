import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import GoogleButton from 'react-google-button';
import Footer from './Footer';

const Signup = () => {
  const { googleSignIn, user } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const goToLogin = useNavigate();
  return (
    <div>
      <div className="login-container">
        <div className="loginTwo">
          <p className="loginWith">Sign up with:</p>
          <div className="google">
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
          {/* <p style={{ marginBottom: '0.7rem' }}>Or</p>
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
          </div> */}
          <p style={{ marginBottom: '1rem' }}>
            Already have an account ?
            <span
              style={{ color: '#0065fe', cursor: 'pointer' }}
              onClick={() => goToLogin('/login')}
            >
              Log in
            </span>
          </p>
          <p className="policy">
            By signing up, you agree to Sciccor's <span> Terms of Service</span>
            , <span> Privacy Policy</span> and
            <span> Acceptable Use Policy</span>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
