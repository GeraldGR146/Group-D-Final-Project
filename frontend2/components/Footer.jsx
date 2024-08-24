import React from 'react';
import FooterSection from './Footers/FooterSection';
import FooterBottom from './Footers/FooterBottom';

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-gray-100 p-6 lg:p-10">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-6 lg:space-y-0">
          <div className="flex-1">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">App Name</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-pink-600"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-blue-400"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <FooterSection title="Company Info" items={['About Us', 'Career', 'We are hiring', 'Blog']} />
          <FooterSection title="Legal" items={['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Disclaimer']} />
          <FooterSection title="Features" items={['Business Marketing', 'User Analytics', 'Live Chat', 'Unlimited Support']} />
          <FooterSection title="Resources" items={['iOS & Android', 'Watch a Demo', 'Customers', 'API']} />
          <div className="flex-1 lg:px-4">
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <form className="flex flex-col lg:flex-row mb-4">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="p-2 border border-gray-300 rounded-t-md lg:rounded-t-none lg:rounded-l-md lg:flex-grow mb-2 lg:mb-0" 
              />
              <button 
                type="submit" 
                className="p-2 bg-blue-500 text-white rounded-b-md lg:rounded-b-none lg:rounded-r-md"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <FooterBottom />
      </footer>
    );
  }
}

export default Footer;
