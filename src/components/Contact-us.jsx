import React from 'react';
import Footer from './footer.jsx';
import Navbar from './navbar.jsx';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-12">
        <Navbar/>
      {/* Hero Section with Background Image */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url("/assets/contact.jpg")`, // Replace with your image URL
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <p className="text-gray-300 mt-4">
            We're always on the lookout to work with new clients. <br />
            If you're interested in working with us, please get in touch.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12 mb-12">
        {/* Combined Contact Details Section */}
        <div className="bg-white border border-gray-300 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Get in Touch</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Address */}
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-700">Address</h3>
              <p className="text-gray-600 mt-1">13100 W Dixie Hwy #4131</p>
              <p className="text-gray-600">North Miami, FL 33161, United States</p>
            </div>
            {/* Phone */}
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-700">Phone</h3>
              <p className="text-gray-600 mt-1">(954) 245-1640</p>
            </div>
          </div>
          {/* Email */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">E-Mail</h3>
            <p className="text-blue-500 hover:underline mt-1">
              <a href="mailto:info@xpresstchotcho.com">info@xpresstchotcho.com</a>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;
