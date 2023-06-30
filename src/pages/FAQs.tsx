import { useState } from 'react';
import '../styles/faqs.css';

const FAQs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleVisibility = () => {
    setIsExpanded(!isExpanded);
  };
  //   const Faqs = [
  //     {
  //       id: '1',
  //       header: 'How does URL shortening work?',
  //       content:
  //         'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
  //     },
  //     {
  //       id: '2',
  //       header: 'How does URL shortening work?',
  //       content:
  //         'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
  //     },
  //     {
  //       id: '3',
  //       header: 'How does URL shortening work?',
  //       content:
  //         'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
  //     },
  //     {
  //       id: '4',
  //       header: 'How does URL shortening work?',
  //       content:
  //         'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
  //     },
  //     {
  //       id: '5',
  //       header: 'How does URL shortening work?',
  //       content:
  //         'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
  //     },
  //     {
  //       id: '6',
  //       header: 'How does URL shortening work?',
  //       content:
  //         'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
  //     },
  //     {
  //       id: '7',
  //       header: 'How does URL shortening work?',
  //       content:
  //         'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
  //     },
  //   ];

  //   const [isExpanded, setIsExpanded] = useState(false);

  //   const toggleVisibility = () => {
  //     setIsExpanded(!isExpanded);
  //   };

  //   const faqsList = Faqs.map((faq) => {
  //     return (
  //       <div className="faqsDiv" key={faq.id}>
  //         <div className="faq">
  //           <p onClick={toggleVisibility}>{faq.header}</p>
  //         </div>
  //         <div>{isExpanded && <p>{faq.content}</p>}</div>
  //       </div>
  //     );
  //   });

  //   return (
  //     <div className="MainFaqs">
  //       <h3>FAQs</h3>
  //       {faqsList}
  //     </div>
  //   );

  return (
    <div className="MainFaqs">
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
    </div>
  );
};

export default FAQs;
