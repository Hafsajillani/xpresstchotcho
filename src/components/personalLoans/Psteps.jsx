import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Get your rate',
    description: "A potential borrower submits an application either online or in person, providing personal, financial, and employment/business information.",
    image: '/assets/step-1.png', // Replace with actual image paths
  },
  {
    id: 2,
    title: 'Get approved',
    description: 'Xpress Tchotcho reviews the application and performs credit checks, income verification, and business feasibility (for business loans).',
    image: '/assets/step-3.png',
  },
  {
    id: 3,
    title: 'Get funds',
    description: 'Upon approval, the loan terms (including amount, interest rate, and repayment schedule) are provided to the borrower for review and acceptance.',
    image: '/assets/step-2.png',
  },
  {
    id: 4,
    title: 'Use the funds',
    description: 'Use your funds for home improvement, travel, or any purpose Once the borrower agrees to the terms, a contract is signed electronically or physically, depending on the application method.',
    image: '/assets/step-4.png',
  },
  {
    id: 5,
    title: 'Track your loan',
    description: 'Funds are disbursed directly to the borrower’s bank account or as a line of credit.',
    image: '/assets/step-5.png',
  },
  {
    id: 6,
    title: 'Pay it off',
    description: ' The borrower begins repayment based on the agreed-upon schedule, which can be made via automated payments, online portal, or at designated payment locations.',
    image: '/assets/step-6.png',
  },
];

const Step = ({ step }) => (
  <div className="flex flex-col items-center text-center p-4 max-w-xs">
    <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full text-lg font-bold mb-4">
      {step.id}
    </div>
    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
    <p className="text-gray-600 mb-4">{step.description}</p>
    <img
      src={step.image}
      alt={`Step ${step.id}`}
      className="w-full h-auto rounded-md shadow-md"
    />
  </div>
);

const StepsSection = () => (
  <section className="bg-blue-50 py-16">
    <div className="text-center mb-12">
      <h2 className="text-2xl font-bold text-gray-900">
        How to easily apply for a personal loan online in 6 steps
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {steps.map((step) => (
        <Step key={step.id} step={step} />
      ))}
    </div>
    <div className="mt-12 text-center">
      <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
        Check your rate
      </button>
      <p className="text-gray-500 mt-2 text-sm">Won't affect your credit score</p>
    </div>
  </section>
);

export default StepsSection;
