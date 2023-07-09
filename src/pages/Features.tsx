import link from '../images/link2.png';
import custom from '../images/editurl.png';
import qrcode from '../images/qrcode.png';
import analytics from '../images/analytics.png';
import '../styles/features.css';
import { Helmet } from 'react-helmet-async';

const Features = () => {
  return (
    <div className="features">
      <Helmet>
        <title>Features</title>
        <meta name="description" content="Features of scissors" />
      </Helmet>
      <div className="possibilities">
        <h2>
          One Stop. <span> Four Possibilities.</span>
        </h2>
        <div className="each-features">
          <div>
            <h5>3M</h5>
            <p>Active users</p>
          </div>
          <div>
            <h5>60M</h5>
            <p className="max-width">Links and QR codes created</p>
          </div>
          <div>
            <h5>1B</h5>
            <p className="max-width">Clicks and scanned connections</p>
          </div>
          <div>
            <h5>300k</h5>
            <p>App integrations</p>
          </div>
        </div>
      </div>
      <div className="reasons">
        <div>
          <div className="why-choose-scissors">
            <h3>
              Why Choose <span> Scissors.</span>
            </h3>
            <p>
              Scissors is the hub of everything that has to do with link
              management. We shorten your URLs, allow you to create custom ones
              for your personal, business, event usage. Our swift QR code
              creation, management and usage tracking with advance analytics for
              all these is second to none.
            </p>
          </div>
          <div className="reasons-why">
            <div className="each-reason-why">
              <div className="margin-bottom">
                <img src={link} alt="" />
              </div>
              <h4 className="margin-bottom">URL Shortening</h4>
              <p>
                Scissor allows you to shorten URLs of your business, events.
                Shorten your URL at scale, URL redirects.
              </p>
            </div>
            <div className="each-reason-why">
              <div className="margin-bottom">
                <img src={custom} alt="" />
              </div>
              <h4 className="margin-bottom">Custom URLs</h4>
              <p>
                With scissor, you can create custom URLs, with the length you
                want! A solution for socials and businesses.
              </p>
            </div>
            <div className="each-reason-why">
              <div className="margin-bottom">
                <img src={qrcode} alt="" />
              </div>
              <h4 className="margin-bottom">QR Codes</h4>
              <p>
                Generate QR codes to your business, events. Bring your audience
                and customers to your doorstep with this scan and go solution.
              </p>
            </div>
            <div className="each-reason-why">
              <div className="margin-bottom">
                <img src={analytics} alt="" />
              </div>
              <h4 className="margin-bottom">Data Analytics</h4>
              <p>
                Receive data on the usage of either your shortened URL, custom
                URLs or generated QR codes. Embedded to monitor progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
