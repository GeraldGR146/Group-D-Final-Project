import React from 'react';
import FooterSection from './Footers/FooterSection';
import FooterBottom from './Footers/FooterBottom';

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-gray-100 p-10">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">App Name</h2>
            <div className="flex space-x-2">
              <a href="#" className="text-blue-600"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-pink-600"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-blue-400"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <FooterSection title="Company Info" items={['About Us', 'Carrier', 'We are hiring', 'Blog']} />
          <FooterSection title="Legal" items={['About Us', 'Carrier', 'We are hiring', 'Blog']} />
          <FooterSection title="Features" items={['Business Marketing', 'User Analytic', 'Live Chat', 'Unlimited Support']} />
          <FooterSection title="Resources" items={['IOS & Android', 'Watch a Demo', 'Customers', 'API']} />
          <div className="flex-1 px-4">
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <form className="flex mb-4">
              <input type="email" placeholder="Your Email" className="p-2 border border-gray-300 rounded-l-md flex-grow" />
              <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-md">Subscribe</button>
            </form>
            <p className="text-gray-600">Lorem ipsum dolor amit.</p>
          </div>
        </div>
        <FooterBottom />
      </footer>
    );
  }
}

export default Footer;
