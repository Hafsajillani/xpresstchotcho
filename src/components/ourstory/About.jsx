import React, { useState } from 'react';
import LoanOptions from './loan-options.jsx';
import Slider from './slider.jsx';
import LendingSection from './lending.jsx';
import JoinOurMission from './joinourmission.jsx';
import Footer from '../footer.jsx';
import Navbar from '../navbar.jsx';

const AboutUs = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Navbar/>

      <div className='bg-blue-600 flex flex-col-reverse md:flex-row items-center justify-center p-4'>
        <div className="bg-blue-600 flex flex-col-reverse md:flex-row items-center justify-center p-4 mt-14 md:mt-16">
          <div className="text-center md:text-left max-w-lg">
            <h3 className="text-white font-semibold text-4xl font-bold mb-4">
              SOLUTIONS FOR EVERY STEP OF
              <span className="text-white font-semibold text-5xl ml-2">YOUR JOURNEY</span>
            </h3>
            <p className="text-lg font-xsm text-white mb-8 leading-relaxed">
              Xpress Tchotcho, LLC plans to offer personal loans and small business loans to Florida consumers. The loans are designed to provide financial assistance for personal expenses, small business ventures, and other general needs such as emergencies, working capital, or expansions. Loans will be unsecured or secured based on the borrower's creditworthiness and collateral.
            </p>
            <a
              href="/check-rate"
              className="text-lg mt-2 font-sm border border-white py-3 px-12 rounded-md text-white transition duration-200 w-full"
            >
              Apply now
            </a>
          </div>
          <img
            src="/assets/mobile-cover.png"
            alt="mobile-cover"
            className="w-full md:w-1/2 md:max-w-md object-cover mb-2 md:mb-0 md:ml-4"
          />
        </div>
      </div>

      <LoanOptions />
      <LendingSection/>
      <Slider />
      <JoinOurMission/>
      <Footer/>
    </>
  );
};

export default AboutUs;
