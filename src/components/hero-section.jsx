// HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-blue-50 py-16 text-center">
      <h2 className="text-3xl font-semibold text-gray-900">Is Xpresstchotcho right for you?</h2>
      <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none">
        Check your rate
      </button>
      <p className="mt-2 text-gray-500">
        <span className="inline-block align-middle">&#128274;</span> Won't affect your credit score
      </p>
    </div>
  );
};

export default HeroSection;
