import React, { useState } from 'react';

const PersonalFAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    { 
      question: "What can a personal loan be used for?", 
      answer: "The funds from a personal loan can typically be used for a variety of purposes. Personal loans are commonly used to help with debt consolidation, medical expenses, home improvement projects, student debt, a move, a wedding, or a vacation." 
    },
    { 
      question: "What is an unsecured personal loan?", 
      answer: "An unsecured personal loan is money borrowed from a lender that is not secured by property such as a house or car over a fixed period of time. While most loans through Xpresstchotcho are unsecured, certain credit unions may place a lien on other accounts you hold with the same institution. There may be an option to secure your personal loan through Xpresstchotcho with your vehicle, which will require a lien to be placed on the vehicle. It is important to review your promissory note for these details before accepting your loan." 
    },
    { 
      question: "How fast can I get my personal loan?", 
      answer: "If you accept your loan before 5 p.m. ET Monday - Friday, your funds will be transferred the next business day. If you accept the online loan after that time period, the funds will be transferred the following business day." 
    },
    { 
      question: "How much can I borrow with a personal loan?", 
      answer: "You can borrow between $1,000 and $10,000⁵ on a personal loan. Note that certain states have specific minimum loan amounts. The exact amount you may borrow depends on what you qualify for based on your application information." 
    },
    { 
      question: "If I check my personal loan rate, will it impact my credit?", 
      answer: "It will not. When you check your rate, we make a soft credit inquiry on your report, which doesn't impact your credit score. If you accept your rate and proceed with your application, we will make a hard credit inquiry to verify your information. This action will be recorded as a hard inquiry on your report and it may impact your credit score." 
    },
    { 
      question: "What are the interest rates on a personal loan?", 
      answer: "All personal loans through Xpresstchotcho offer a fixed interest rate and range between 7.4% - 35.99%.⁶ The rate you qualify for is based on various factors including your education⁴, work experience, and credit history. As a reminder, the interest rate is only one factor of the cost of the loan. The total cost of your loan is reflected in the APR (annual percentage rate), which is the annual cost of a loan that includes both interest rate and all other associated fees." 
    },
  ];

  return (
    <div className="flex justify-center items-center bg-white py-10 px-4">
  <div className="w-full max-w-2xl">
    <h2 className="text-4xl font-semibold text-gray-800 text-center mb-6">
      Let us answer your questions
    </h2>
    <ul className="space-y-6">
      {faqs.map((faq, index) => (
        <li key={index} className="p-4 text-center">
          <button
            onClick={() => toggleFAQ(index)}
            className={`w-full text-left text-blue-600 text-lg font-medium ${
              open === index ? 'text-blue-700' : ''
            }`}
          >
            <span className="text-yellow-600 mr-2">&#8250;</span>
            {faq.question}
          </button>
          {open === index && (
            <p className="mt-4 text-gray-600 text-base px-2">
              {faq.answer}
            </p>
          )}
        </li>
      ))}
    </ul>
  </div>
</div>

  );
};

export default PersonalFAQ;
