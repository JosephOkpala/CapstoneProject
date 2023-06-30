import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import scissor from './images/scissor.png';
import line from './images/logoline.png';
import scissorLogo from './images/scissorlogo.png';
import { UserAuth } from './context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const { user, logOut } = UserAuth();

  async function handleLogOutAndGoHome() {
    try {
      await logOut();
      goHome('/');
    } catch (error) {
      console.log(error);
    }
  }

  const goHome = useNavigate();

  return (
    <nav>
      <div className="navbarDiv">
        <div
          className="logo"
          onClick={() => {
            goHome('/');
          }}
        >
          <img src={scissorLogo} alt="" />
          <img src={line} alt="" />
          <img src={scissor} alt="" />
        </div>
        <div className={`linksBtn ${isMenuOpen ? 'open' : ''}`}>
          <div className="navLinks">
            <Link to="/" onClick={handleLinkClick}>
              MyUrls
            </Link>
            <Link to="/features" onClick={handleLinkClick}>
              Features
            </Link>
            <Link to="/pricing" onClick={handleLinkClick}>
              Pricing
            </Link>
            <Link to="/analytics" onClick={handleLinkClick}>
              Analytics
            </Link>
            <Link to="/faqs" onClick={handleLinkClick}>
              FAQs
            </Link>
          </div>
          <div>
            <Link to="/login">
              {user?.displayName ? (
                <button className="logOut" onClick={handleLogOutAndGoHome}>
                  Log out
                </button>
              ) : (
                <button className="login" onClick={handleLinkClick}>
                  Log in
                </button>
              )}
            </Link>
            <button className="trial">Try for free</button>
          </div>
        </div>
        <div className="burger" onClick={handleMenuToggle}>
          <div className={`one ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`two ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`three ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
