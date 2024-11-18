import React from 'react';

const LoanSteps = () => {
  const steps = [
    {
      id: 1,
      title: "Get your rate",
      description: "It takes less than 5 minutes to check your rate—and it won’t affect your credit score.",
    },
    {
      id: 2,
      title: "Get approved",
      description: "Most borrowers are instantly approved with no paperwork required.",
    },
    {
      id: 3,
      title: "Get funds",
      description: "Once approved, you could get funded in 24 hours or less.",
    },
  ];

  return (
    <div className="w-full h-full max-w-8xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch lg:h-auto">
        
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-center text-center lg:text-center lg:w-1/2 p-4 lg:p-8">
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 lg:mb-8 max-w-xs sm:max-w-md lg:max-w-lg">
  Personal loans through Xpresstchotcho are quick and easy
</h2>


          {steps.map((step) => (
            <div key={step.id} className="mb-8 lg:mb-10 flex flex-col items-center lg:items-center">
              <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg font-semibold mb-3 lg:mb-4">
                {step.id}
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-center lg:text-left max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
          <div 
            className="w-full h-60 sm:h-72 md:h-80 lg:h-full bg-cover bg-center"
            style={{ backgroundImage: 'url(/assets/woman2.jpg)' }}
            aria-label="Woman using tablet on sofa"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoanSteps;
