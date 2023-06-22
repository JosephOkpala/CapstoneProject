import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import scissor from './images/scissor.png';
import line from './images/logoline.png';
import scissorLogo from './images/scissorlogo.png';
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

  return (
    <nav>
      <div className="navbarDiv">
        <div className="logo">
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
            <button className="login">Log in</button>
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
