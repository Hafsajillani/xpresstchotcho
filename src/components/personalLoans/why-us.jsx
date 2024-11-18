import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-blue-50 py-12">
      <div className="max-w-7xl mt-8 mb-8 mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why choose Xpresstchotcho for your online personal loan?
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          You’re more than your credit score—Our model looks at factors such as
          your education and employment to help you get a rate you deserve.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Flexible loan amounts */}
          <div className="flex flex-col items-center">
            <img className="w-16 h-16 mb-4" src="/assets/money-bag.png" alt="flexible-amount"/>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Flexible loan amounts
            </h3>
            <p className="text-gray-600 text-md">
              You can get a personal loan from $1,000 to $10,000.
            </p>
          </div>

          {/* Fixed rates and terms */}
          <div className="flex flex-col items-center">
          <img className="w-16 h-16 mb-4" src="/assets/exchange-rate.png" alt="exchange-rate"/>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Fixed rates and terms
            </h3>
            <p className="text-gray-600 text-md">
              Choose between personal loans in 3 or 5 year terms, with fixed
              rates of 7.4% - 35.99% APR.
            </p>
          </div>

          {/* No prepayment fees */}
          <div className="flex flex-col items-center">
          <img className="w-16 h-16 mb-4" src="/assets/no-fee.png" alt="no-fee"/>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              No prepayment fees
            </h3>
            <p className="text-gray-600 text-md">
              You can prepay your loan at any time with no fee or penalty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
