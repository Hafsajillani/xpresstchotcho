import React, { useState } from 'react';
import { FaLock } from "react-icons/fa";
import StepsSection from './Psteps';
import Navbar from '../navbar';
import Footer from '../footer';
import PersonalMain from './Pmain';
import WhyChooseUs from './why-us';
import TestimonialSection from './Ptestimonial';
import PersonalFAQ from './Pfaqs';


const PersonalHome = () => {

  return (
    <>
      <Navbar/>
      <PersonalMain/>
      <WhyChooseUs/>
      <TestimonialSection/>
      <StepsSection/>
      <PersonalFAQ/>
      <div className="bg-blue-50 mb-12 mt-12 flex flex-col items-center justify-center">
      <h2 className="text-2xl mt-14 font-bold text-gray-900">
      See what you can save with a personal loan through Xpresstchotcho.
      </h2>
        <div className="flex justify-center mb-2">
          <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-md font-bold">
            Check your rate
          </button>
        </div>
        <p className="mb-14 text-sm text-gray-500 flex items-center justify-center">
          <FaLock className="h-4 w-4 text-black mr-1" />{" "}
          <span className="font-semibold text-black mr-1">Won’t affect</span>
          <span className="ml-1">your credit score.</span>
        </p>
        </div>
      <Footer/>
    </>
  );
};

export default PersonalHome;
