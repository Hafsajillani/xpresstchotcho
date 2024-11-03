import React from 'react';

const AboutUs = () => (
    <div className="flex mt-12 flex-col md:flex-row items-center justify-center p-4">
        <img 
            src="/assets/mobile-cover.png" 
            alt="mobile-cover" 
            className="w-full md:w-1/2 max-w-xs md:max-w-md object-cover mb-4 md:mb-0 md:mr-4"
        />
        <div className="text-center md:text-left max-w-lg">
            <h3 className="text-gray-600 font-semibold text-4xl font-bold mb-2">SOLUTIONS FOR EVERY STEP OF
            <span className='text-blue-600 font-semibold text-5xl ml-2'>YOUR JOURNEY</span></h3>
            <p className="text-lg font-medium text-gray-600 mb-8 leading-relaxed">
                Xpress Tchotcho, LLC plans to offer personal loans and small business loans to Florida consumers. The loans are designed to provide financial assistance for personal expenses, small business ventures, and other general needs such as emergencies, working capital, or expansions. Loans will be unsecured or secured based on the borrower's creditworthiness and collateral.
            </p>
            <a 
            href="/check-rate" 
             className="text-lg mt-2 font-sm border border-blue-600 text-blue-600 py-3 px-12 rounded-md hover:bg-blue-600 hover:text-white transition duration-200 w-full"
            >
               CHECK YOUR RATE
            </a>
        </div>
    </div>
);

export default AboutUs;
