import React from "react";

const JoinOurMission = () => {
  return (
    <div className="bg-gray-100 flex flex-col md:flex-row items-start justify-center py-16 px-4 md:px-20 bg-gray-100">
      {/* Left side heading */}
      <div className="flex-1 mb-10 md:mb-0 md:mr-10">
        <h2 className="text-4xl font-semibold text-gray-800">Join our mission</h2>
      </div>

      {/* Right side cards */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="border-t-2 border-blue-600 pt-4">
          <h3 className="text-lg font-semibold text-gray-800">Xpresstchotcho for Lenders</h3>
          <p className="text-gray-600">
            Grow your loan portfolio, approve more borrowers, and provide a digital-first experience.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border-t-2 border-blue-600 pt-4">
          <h3 className="text-lg font-semibold text-gray-800">Xpresstchotcho for Auto Dealers</h3>
          <p className="text-gray-600">
            Offer a seamless online to in-store car buying and financing experience.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border-t-2 border-blue-600 pt-4">
          <h3 className="text-lg font-semibold text-gray-800">Careers at Xpresstchotcho</h3>
          <p className="text-gray-600">
            Build the future of credit with us. See open roles here.
          </p>
        </div>

        {/* Card 4 */}
        <div className="border-t-2 border-blue-600 pt-4">
          <h3 className="text-lg font-semibold text-gray-800">Investor relations</h3>
          <p className="text-gray-600">
            Find the latest news, events, and performance information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinOurMission;
