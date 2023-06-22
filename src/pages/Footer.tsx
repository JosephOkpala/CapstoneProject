import footerlogo1 from '../images/scissorlogofooter.png';
import footerlogo2 from '../images/logolinefooter.png';
import footerlogo3 from '../images/scissorfooter.png';
import twitter from '../images/twitterfooter.png';
import instagram from '../images/instagramfooter.png';
import linkedin from '../images/linkedinfooter.png';
import facebook from '../images/facebookfooter.png';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="getStarted">
        <h2>Revolutionizing Link Optimization</h2>
        <button>Get Started</button>
      </div>
      <div className="footer">
        <div className="footerLogoSocials">
          <div className="footerLogo">
            <img src={footerlogo1} alt="scissor logo" />
            <img src={footerlogo2} alt="scissor logo" />
            <img src={footerlogo3} alt="scissor logo" />
          </div>
          <div className="footerSocials">
            <img src={twitter} alt="twiiter logo" />
            <img src={instagram} alt="instagram logo" />
            <img src={linkedin} alt="linkedin logo" />
            <img src={facebook} alt="facebook logo" />
          </div>
        </div>
        <div className="footerLinks">
          <div className="eachFooterLink">
            <h5>Why Scissor?</h5>
            <p>Scissor 101</p>
            <p>Integrations and API</p>
            <p>Pricing</p>
          </div>
          <div className="eachFooterLink">
            <h5>Solutions</h5>
            <p>Social Media</p>
            <p>Digital Marketing</p>
            <p>Customer Services</p>
            <p>For Developers</p>
          </div>
          <div className="eachFooterLink">
            <h5>Products</h5>
            <p>Links Management</p>
            <p>QR Codes</p>
            <p>Link-in-bio</p>
          </div>
          <div className="eachFooterLink">
            <h5>Company</h5>
            <p>About Scissors</p>
            <p>Careers</p>
            <p>Partners</p>
            <p>Press</p>
            <p>Contact</p>
            <p>Reviews</p>
          </div>
          <div className="eachFooterLink">
            <h5>Resources</h5>
            <p>Blog</p>
            <p>Resource Library</p>
            <p>Developers</p>
            <p>App Connectors</p>
            <p>Support</p>
            <p>Trust Center</p>
            <p>Browser Extension</p>
            <p>Mobile App</p>
          </div>
          <div className="eachFooterLink">
            <h5>Features</h5>
            <p>Branded Links</p>
            <p>Mobile Links</p>
            <p>Campaign</p>
            <p>Management & Analytics</p>
            <p>QR Code generation</p>
          </div>
          <div className="eachFooterLink">
            <h5>Legal</h5>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Terms of Service</p>
            <p>Acceptable Use Policy</p>
            <p>Code of Conduct</p>
          </div>
        </div>
      </div>
      <p style={{ textAlign: 'right', marginRight: '4rem' }}>
        Terms of Service | Security | Scissor 2023
      </p>
    </footer>
  );
};

export default Footer;
