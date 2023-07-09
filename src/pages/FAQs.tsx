import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/faqs.css';
import { Helmet } from 'react-helmet-async';

const FAQs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleVisibility = () => {
    setIsExpanded(!isExpanded);
  };

  const goToLogin = useNavigate();

  return (
    <div className="MainFaqs">
      <Helmet>
        <title>FAQs</title>
        <meta
          name="description"
          content="Frequently asked questions on Scissors"
        />
      </Helmet>
      <h3>FAQs</h3>
      <div className="faqsDiv">
        <div className="faq">
          <p onClick={toggleVisibility}>How does URL shortening work?</p>
        </div>
        <div>
          {isExpanded && (
            <p style={{ lineHeight: '1.7', paddingBottom: '1rem' }}>
              URL shortening works by taking a long URL and creating a shorter,
              condensed version that redirects to the original URL. When a user
              clicks on the shortened link, they are redirected to the intended
              destination.
            </p>
          )}
        </div>
        <div className="faq">
          <p>
            Is it necessary to create an account to use the URL shortening
            service?
          </p>
        </div>
        <div className="faq">
          <p>Are the shortened links permanent? Will they expire?</p>
        </div>
        <div className="faq">
          <p>Are there any limitations on the number of URLs I can shorten?</p>
        </div>
        <div className="faq">
          <p>
            Can I customize the shortened URLs to reflect my brand or content?
          </p>
        </div>
        <div className="faq">
          <p>Can I track the performance of my shortened URLs?</p>
        </div>
        <div className="faq">
          <p>
            How secure is the URL shortening service? Are the shortened links
            protected against spam or malicious activity?
          </p>
        </div>
        <div className="faq">
          <p>What is a QR code and what can it do?</p>
        </div>
        <div className="faq">
          <p>
            Is there an API available for integrating the URL shortening service
            into my own applications or websites?
          </p>
        </div>
      </div>
      <div className="getStarted">
        <h2>Revolutionizing Link Optimization</h2>
        <button
          onClick={() => {
            goToLogin('/login');
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default FAQs;
