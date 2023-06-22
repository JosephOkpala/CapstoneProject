import '../styles/pricing.css';
import check from '../images/check-circle.png';

const Pricing = () => {
  return (
    <div className="pricingMain">
      <div className="pricingHeader">
        <h3>
          A <span>price perfect</span> for your needs.
        </h3>
        <p>
          From catering for your personal, business, event, socials needs, you
          can be rest assured we have you in mind in our pricing.
        </p>
      </div>
      <div className="pricing">
        <div className="eachPricing">
          <div>
            <p className="paymentType">Basic</p>
            <h4 className="paymentPrice">Free</h4>
            <p className="paymentTypeDesc">Free plan for all users</p>
          </div>
          <div className="paymentOptions">
            <div className="eachPaymentOption">
              <img src={check} alt="" />
              <p>Unlimited URL Shortening</p>
            </div>
            <div className="eachPaymentOption">
              <img src={check} alt="" />
              <p>Basic Link Analytics</p>
            </div>
            <div className="eachPaymentOption">
              <img src={check} alt="" />
              <p>Customizable Short Links</p>
            </div>
            <div className="eachPaymentOption">
              <img src={check} alt="" />
              <p>Standard Support</p>
            </div>
            <div className="eachPaymentOption">
              <img src={check} alt="" />
              <p>Ad-supported</p>
            </div>
          </div>
        </div>
        <div className="eachPricing" id="premiumPricing">
          <div>
            <p className="paymentType">Professional</p>
            <h4 className="paymentPrice">$15/month</h4>
            <p className="paymentTypeDesc">Ideal for business creators</p>
          </div>
          <div className="paymentOptions">
            <div className="eachPaymentOption">
              <img src={check} alt="" />
              <p>Enhanced Link Analytics</p>
            </div>
            <div className="eachPaymentOption">
              <img src={check} alt="" />
              <p>Custom Branded Domains</p>
            </div>
            <div className="eachPaymentOption">
              <img src={check} alt="" />
              <p>Advanced Link Customization</p>
            </div>
            <div className="eachPaymentOption">
              <img src={check} alt="" />
              <p>Priority Support</p>
            </div>
            <div className="eachPaymentOption">
              <img src={check} alt="" />
              <p>Ad-free Experience</p>
            </div>
          </div>
        </div>
        <div className="eachPricing">
          <div>
            <p className="paymentType">Teams</p>
            <h4 className="paymentPrice">$25/month</h4>
            <p className="paymentTypeDesc">Share with up to 10 users</p>
          </div>
          <div className="paymentOptions">
            <div className="eachPaymentOption">
              <img src={check} alt="" />
              <p>Team Collaboration</p>
            </div>
            <div className="eachPaymentOption">
              <img src={check} alt="" />
              <p>User Roles and Permissions</p>
            </div>
            <div className="eachPaymentOption">
              <img src={check} alt="" />
              <p>Enhanced Security</p>
            </div>
            <div className="eachPaymentOption">
              <img src={check} alt="" />
              <p>API Access</p>
            </div>
            <div className="eachPaymentOption">
              <img src={check} alt="" />
              <p>Dedicated Account Manager</p>
            </div>
          </div>
        </div>
      </div>
      <div className="getPricing">
        <button className="customPricing">Get Custom Pricing</button>
        <button className="selectPricing">Select Pricing</button>
      </div>
    </div>
  );
};

export default Pricing;
