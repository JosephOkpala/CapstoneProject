import { Link } from 'react-router-dom';
import '../styles/myurls.css';
import Features from './Features';
import Pricing from './Pricing';
import FAQs from './FAQs';
import Footer from './Footer';

const MyUrls = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-div">
          <div className="hero-text">
            <h1 className="hero-header">
              Optimize Your Online Experience With Our
              <span>
                Advanced
                <span className="blue-herotext"> URL Shortening</span> Solution
              </span>
            </h1>
            <p>
              Personalize your shortened URLs to align with your brand identity.
              Utilize custom slugs and branded links and domain customization
              options to reinforce your brand persence and enhance user
              engagement.
            </p>
          </div>
          <div>
            <Link to="/signup">
              <button className="btn-header1">Sign up</button>
            </Link>
            <button className="btn-header2">Learn more</button>
          </div>
        </div>
      </div>
      <Features />
      <Pricing />
      <FAQs />
      <Footer />
    </div>
  );
};

export default MyUrls;
