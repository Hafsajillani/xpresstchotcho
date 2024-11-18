import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { SiTrustpilot } from 'react-icons/si';
import { FaLock } from 'react-icons/fa';
import ServiceCard from './Services.jsx';
import Testimonials from './Testimonials-section.jsx';
import LoanSteps from './Steps.jsx';
import FAQ from './faqs.jsx';
import Footer from './footer.jsx';
import Navbar from './navbar.jsx';


const HomePage = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
    <section>
      <Helmet>
        <title>Quick and Easy Loans for Your Financial Needs | Xpresstchotcho</title>
        <meta name="description" content="Get hassle-free loans with Xpresstchotcho. Our streamlined loan services offer timely funding to meet your financial needs." />
        <meta name="keywords" content="loans, personal loans, car loan refinance, easy loans, financial solutions" />
      </Helmet>

      <Navbar/>

      <main className="flex flex-col items-center py-16 mt-auto bg-blue-50">
        <section className="flex flex-col md:flex-row items-center max-w-6xl px-6 space-y-8 md:space-y-0 md:space-x-8">
          
          <div className="md:w-1/2">
            <h1 className="text-4xl mt-6 font-semibold text-gray-700 mb-6 leading-tight">
              QUICK AND EASY LOANS FOR
              <span className='text-5xl text-bold text-blue-600'> YOUR FINANCIAL NEEDS</span>
            </h1>
            <p className="text-lg font-medium text-gray-600 mb-8 leading-relaxed">
              Our loan services offer a hassle-free and streamlined borrowing experience, providing you with the funds you need in a timely manner to meet your financial requirements.
            </p>
            
            <a 
              href="/check-rate" 
              className="text-lg mt-6 font-sm bg-blue-600 text-white py-3 px-12 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Check your rate
            </a>
            <div className="mt-1">
              <button className="text-sm font-sm text-gray flex items-center">
                <FaLock className="mr-2 mt-4" />
                <span className='text-gray font-bold mt-4'>Won't affect</span>
                <span className='ml-1 mt-4'>your credit score</span> 
              </button>
            </div>
          </div>

          <div className="md:flex w-full ml-8 md:w-1/2 justify-center">
  <div className="relative w-[500px] h-[500px] lg:w-[600px] lg:h-[600px]">
    <img src="/assets/header.png" alt="header-image" className="w-full h-full object-contain rounded-lg" />
  </div>
</div>

        </section>

        <section className="mt-16 max-w-6xl w-full px-6">
          <h2 className="text-1xl font-semibold text-gray-700 mb-6 text-left leading-snug tracking-wide underline">
            WHAT WOULD YOU LIKE TO DO?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 relative overflow-hidden">
              <div className="absolute top-4 left-4 md:left-5 md:top-6 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <img src='/assets/personal (3).png' alt='personal-loan' className="w-10 h-10 object-contain" />
              </div>
              <div className="relative mb-4 pl-20">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Personal Loans</h3>
                <p className="text-base font-medium text-gray-600 mb-3 leading-snug">
                  Consolidate debt and more
                </p>
                <a href="/personal-loan" className="text-base font-semibold text-blue-600 hover:underline">
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
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Car Refinance Loan</h3>
                <p className="text-base font-medium text-gray-600 mb-3 leading-snug">
                  Swap your car loan and save
                </p>
                <a href="/car-loan-refinance" className="text-base font-semibold text-blue-600 hover:underline">
                  Get your rate in mins &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center mt-8 space-x-2">
          <div className="flex justify-center items-center space-x-2 mt-4 flex-wrap">
            <p className="text-lg font-semibold text-[#434343]">Excellent</p>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="p-1 mx-1" style={{ backgroundColor: '#2448E9' }}>
                  <SiTrustpilot className="text-white text-lg" />
                </div>
              ))}
            </div>
            <p className="text-[#434343]">Trustpilot</p>
            <SiTrustpilot className="text-[#2448E9] text-lg" />
          </div>
        </section>
      </main>
        <ServiceCard />
        <Testimonials />
        <LoanSteps />
        <FAQ />
        <Footer />
    </section>
    </>
    
  );
};

export default HomePage;
