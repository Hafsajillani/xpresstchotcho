import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { SiTrustpilot } from 'react-icons/si';
import { FaLock } from 'react-icons/fa';

const HomePage = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Quick and Easy Loans for Your Financial Needs | Xpresstchotcho</title>
        <meta name="description" content="Get hassle-free loans with Xpresstchotcho. Our streamlined loan services offer timely funding to meet your financial needs." />
        <meta name="keywords" content="loans, personal loans, car loan refinance, easy loans, financial solutions" />
      </Helmet>

      <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-white shadow z-50 w-full">
        <div className="flex items-center space-x-2">
          <img src='/assets/logo.ico' alt='logo' className="w-8 h-8" />
          <span className="text-2xl font-bold text-gray-700">Xpresstchotcho</span>
        </div>

        <nav className="hidden md:flex space-x-6 text-base font-medium text-gray-700">
          <a href="#about" className="hover:text-blue-600 transition duration-200">ABOUT US</a>
          <a href="#services" className="hover:text-blue-600 transition duration-200">SERVICES</a>
          <a href="#contact" className="hover:text-blue-600 transition duration-200">CONTACT US</a>
          <a href="/login" className="hover:text-blue-600 transition duration-200">LOGIN</a>
        </nav>

        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {isMobileMenuOpen && (
          <nav className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 md:hidden z-50">
            <a href="#about" className="block py-2 text-gray-600 hover:text-gray-800 transition duration-200">About Us</a>
            <a href="#services" className="block py-2 text-gray-600 hover:text-gray-800 transition duration-200">Services</a>
            <a href="#contact" className="block py-2 text-gray-600 hover:text-gray-800 transition duration-200">Contact Us</a>
            <a href="/login" className="block py-2 text-gray-600 hover:text-gray-800 transition duration-200">Login</a>
          </nav>
        )}
      </header>

      <main className="flex flex-col items-center py-16 mt-8 bg-blue-50">
        <section className="flex flex-col md:flex-row items-center max-w-6xl px-6 space-y-8 md:space-y-0 md:space-x-8">
          
          <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold text-gray-600 mb-6 leading-tight">
              QUICK AND EASY LOANS FOR
              <span className='text-6xl text-bold text-blue-600'> YOUR FINANCIAL NEEDS</span>
            </h1>
            <p className="text-lg font-medium text-gray-600 mb-8 leading-relaxed">
              Our loan services offer a hassle-free and streamlined borrowing experience, providing you with the funds you need in a timely manner to meet your financial requirements.
            </p>
            
      <a 
        href="/check-rate" 
        className="text-lg mt-6 font-sm bg-blue-600 text-white py-3 px-12 rounded-md hover:bg-blue-700 transition duration-200"
      >
        CHECK YOUR RATE
      </a>
      <div className="mt-1">
        <button className="text-sm font-sm text-gray flex items-center">
          <FaLock className="mr-2 mt-4" />
          <span className='text-gray font-bold mt-4'>Won't affect</span>
          <span className='ml-1 mt-4'>your credit score</span> 
        </button>
      </div>

            
          </div>

          {/* Image Container - Hidden on Mobile */}
          <div className="md:flex w-full md:w-1/2 justify-center">
            <div className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]">
              <img src="/assets/header.png" alt="header-image" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </section>
        <section className="mt-16 max-w-6xl w-full px-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-left leading-snug tracking-wide underline"> {/* Adjusted size and line height */}
            WHAT WOULD YOU LIKE TO DO?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 relative overflow-hidden">
              <div className="absolute top-4 left-4 md:left-5 md:top-6 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <img src='/assets/personal (3).png' alt='personal-loan' className="w-10 h-10 object-contain" />
              </div>
              <div className="relative mb-4 pl-20">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">PERSONAL LOANS</h3> {/* Adjusted font size */}
                <p className="text-base font-medium text-gray-600 mb-3 leading-snug"> {/* Adjusted line height */}
                  Consolidate debt and more
                </p>
                <a href="/personal-loans" className="text-base font-semibold text-blue-600 hover:underline">
                  View details &rarr;
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 relative overflow-hidden">
              <div className="absolute top-4 left-4 md:left-5 md:top-6 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <img src='/assets/car-refine (1).png' alt='car-refine' className="w-10 h-10 object-contain" />
              </div>
              <div className="relative mb-4 pl-20">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">CAR LOAN REFINANCE</h3> {/* Adjusted font size */}
                <p className="text-base font-medium text-gray-600 mb-3 leading-snug"> {/* Adjusted line height */}
                  Swap your car loan and save
                </p>
                <a href="/car-loan-refinance" className="text-base font-semibold text-blue-600 hover:underline">
                  Get your rate in mins &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Rating Section */}
        <section className="flex items-center mt-8 space-x-2">
          <div className="flex justify-center items-center space-x-2 mt-4 flex-wrap">
          <p className="text-lg font-semibold text-[#434343]">Excellent</p>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="p-1 mx-1" // Padding and margin
                  style={{ backgroundColor: '#2448E9' }} // Specific green color
                >
                  <SiTrustpilot className="text-white text-lg" /> {/* White star */}
                </div>
              ))}
            </div>

            <p className="text-[#434343]">Trustpilot</p>
            <SiTrustpilot className="text-[#2448E9] text-lg" />
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
