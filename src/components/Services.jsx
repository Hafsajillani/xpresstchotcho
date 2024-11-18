import React from 'react';

const ServiceCard = ({ title, subtitle, features, primaryLink, secondaryLink, primaryAction, secondaryAction, imageSrc }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 relative overflow-hidden'>
    <div className="relative mb-4 flex flex-col items-center">
    <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-4">{title}</h3>
    <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-2">
      <img src={imageSrc} alt={title} className="w-16 h-16 object-contain" />
    </div>
    <p className="text-lg font-semibold text-gray-700 mt-6 mb-2 leading-snug">
      {subtitle}
    </p>
    <p className='className="text-base font-sm text-gray-600 mb-3 leading-snug"'>
    <ul className="space-y-2 mb-4 text-left w-full">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2 text-gray-600">
                <img src="/assets/arrow.png" alt="Arrow" className="w-5 h-5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
    </p>
    <div className="text-base font-sm text-gray-600 mb-3 leading-snug">
         <a href={primaryLink} target="_blank" rel="noopener noreferrer">
            <button className="text-lg font-medium bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200 w-full">
              {primaryAction}
            </button>
          </a>
          <a href={secondaryLink} target="_blank" rel="noopener noreferrer">
            <button className="text-lg mt-2 font-sm border border-blue-600 text-blue-600 py-3 px-4 rounded-md hover:bg-blue-600 hover:text-white transition duration-200 w-full">
              {secondaryAction}
            </button>
          </a>
        </div>
  </div>
      </div>
  );
};

const Services = () => {
  return (
    <div className="bg-white mt-12 mb-12 py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card 1 - Personal Loans */}
        <ServiceCard
          title="Personal Loans"
          subtitle="Flexible funding for your needs."
          features={[
            'Quick access to cash',
            'Options from reputable lenders',
            'Convenient for personal needs'
          ]}
          primaryAction="Check your rate"
          secondaryAction="Apply now"
          primaryLink="/personal-loan"
          secondaryLink="/apply-personal-loans"
          imageSrc="/assets/personal.png" 
        />

        {/* Card 2 - Car Loan Refinance */}
        <ServiceCard
          title="Car Refinance Loan"
          subtitle="Save on your car payments today."
          features={[
            'Lower your monthly payments',
            'Flexible terms available',
            'Quick and easy process'
          ]}
          primaryAction="Check your rate"
          primaryLink="/car-refinance"
          secondaryLink="/apply-car-refinance"
          secondaryAction="Apply now"
          imageSrc="/assets/car-refine.png" 
        />

        {/* Card 3 - Small Business Loan 
        <ServiceCard
          title="SMALL BUSINESS LOAN"
          subtitle="Tailored financing for growth."
          features={[
            'Customized loans for your business',
            'Competitive rates',
            'Flexible repayment options'
          ]}
          primaryAction="CHECK YOUR RATE"
          secondaryAction="APPLY NOW"
          imageSrc="/assets/loan.png" 
        />*/}

        {/* Card 4 - Technology Purchase Loan 
        <ServiceCard
          title="TECHNOLOGY PURCHASE LOAN"
          subtitle="Fund your tech purchases easily."
          features={[
            'Fast funding for tech needs',
            'Manageable terms',
            'Support for your business goals'
          ]}
          primaryAction="CHECK YOUR RATE"
          secondaryAction="APPLY NOW"
          imageSrc="/assets/tech.png" 
        />*/}
      </div>
    </div>
  );
};

export default Services;
