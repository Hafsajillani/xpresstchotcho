import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideContent = [
    {
      title: 'Fair Lending',
      description:
        "An AI system, like any lending technology or process, must avoid unlawful disparate impact or statistical bias that would be harmful to disadvantaged groups. Fair systems also provide clear explanations to declined consumers so that they can improve their future creditworthiness.\n\nOver the last seven years, Xpresstchotcho has developed and refined a state-of-the-art fairness testing framework that evaluates every application, loan, and model for bias. This framework encompasses disparate treatment and impact evaluation, including qualitative and quantitative assessments. As part of our service, we provide both lender-specific and platform-wide fairness test results to each lender on our platform each quarter.",
      buttonLabel: 'Learn More',
      image: '/assets/scaling.png',
    },
    {
      title: 'Data Security and Privacy',
      description:
        "Xpresstchotcho prioritizes data security and privacy, ensuring that all user data is handled with the highest level of protection. We use advanced encryption methods and comply with industry regulations to protect sensitive information. Our security protocols include regular audits, real-time monitoring, and secure data storage to prevent unauthorized access and data breaches.",
      buttonLabel: 'Learn More',
      image: '/assets/data-security.png',
    },
    {
      title: 'Safety and Soundness',
      description:
        "Our commitment to safety and soundness involves maintaining a financially secure environment for our users and partners. Xpresstchotcho employs a robust risk management framework to ensure the stability of our platform. Through careful analysis and regulatory adherence, we strive to create a dependable, sound financial infrastructure for lending operations.",
      buttonLabel: 'Learn More',
      image: '/assets/safety-soundness.png',
    },
    {
      title: 'An Active Participant in the Industry',
      description:
        "Xpresstchotcho is an active participant in the financial industry, collaborating with regulators, policymakers, and industry groups to promote innovation and responsible practices in lending. We actively engage in discussions and initiatives that shape the future of financial services, aiming to create a positive impact on both consumers and the industry at large.",
      buttonLabel: 'Learn More',
      image: '/assets/industry-participation.png',
    },
  ];

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slideContent.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slideContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center bg-blue-600 text-white py-16 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        A commitment to regulatory compliance
      </h2>
      <p className="text-center max-w-2xl mb-12">
        Xpresstchotcho ensures that every lender retains control over their credit policy, business objectives, and risk appetite. Each lender originates under their own charter, whether state or federal. Some of the important regulatory issues a responsible AI lending platform faces include:
      </p>

      <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row p-8 items-center w-full max-w-5xl">
        <div className="relative mr-0 mb-6 md:mr-8 md:mb-0 flex-shrink-0">
          <div className="bg-blue-100 rounded-full w-36 h-36 md:w-48 md:h-48 flex items-center justify-center">
            <img
              src={slideContent[currentIndex].image}
              alt={slideContent[currentIndex].title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-blue-600 text-xl md:text-2xl font-semibold mb-4">
            {slideContent[currentIndex].title}
          </h3>
          <p className="text-gray-700 mb-6 whitespace-pre-line text-sm sm:text-base">
            {slideContent[currentIndex].description}
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded text-sm md:text-base">
            {slideContent[currentIndex].buttonLabel}
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={handlePrevSlide}
          className="p-2 bg-blue-600 rounded-full text-white bg-blue-500"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNextSlide}
          className="p-2 bg-blue-600 rounded-full text-white bg-blue-500"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
