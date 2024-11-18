import React from 'react';

function LoanOptions() {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-gray-800">
      {/* Icons Section */}
      <div className="flex items-center space-x-8 mb-4">
        <div className="p-4 hidden sm:block">
          <img src="/assets/approved1.png" alt="Store Icon" className="w-50 h-50" />
        </div>
        <div className="p-4 hidden sm:block">
          <img src="/assets/approved2.png" alt="Wallet Icon" className="w-50 h-50" />
        </div>
        <div className="p-4 hidden sm:block">
          <img src="/assets/approved.png" alt="Approved Icon" className="w-50 h-50" />
        </div>
        <div className="p-4 hidden sm:block">
          <img src="/assets/approved3.png" alt="Car Icon" className="w-50 h-50" />
        </div>
        <div className="p-4 hidden sm:block">
          <img src="/assets/approved4.png" alt="House Icon" className="w-50 h-50" />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center max-w-lg mt-8">
        <h1 className="text-3xl font-semibold">
          We’re dedicated to improving access to credit{' '}
          <span className="text-blue-600">for all</span>
        </h1>
        <p className="text-gray-500 italic mt-2">Why? Because credit really matters.</p>
        <p className="text-gray-600 mt-4">
          Money is a fundamental ingredient of life, and unless you’re one of the few percent
          of Americans with significant wealth, the price and difficulty of borrowing affects
          you every day. Throughout history, affordable credit has been central to unlocking
          mobility and opportunity.
        </p>

        {/* Woman 4 Image */}
        <img
          src="/assets/woman4.jpg"
          alt="Woman 4"
          className="mt-8"
        />

        {/* Black Line */}
        <hr className="mt-16 mb-24 border-t-1 border-black w-full" />
      </div>
    </div>
  );
}

export default LoanOptions;
