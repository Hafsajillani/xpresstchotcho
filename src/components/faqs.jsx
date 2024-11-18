import React, { useState } from 'react';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    { 
      question: "What is a personal loan?", 
      answer: "An unsecured personal loan is money borrowed from a lender that is not secured by property such as a house or car over a fixed period of time. While most loans through Xpresstchotcho are unsecured, certain credit unions may place a lien on other accounts you hold with the same institution. There may be an option to secure your personal loan through Xpresstchotcho with your vehicle, which will require a lien to be placed on the vehicle. It is important to review your promissory note for these details before accepting your loan." 
    },
    { 
      question: "What is a car refinance loan?", 
      answer: "A car refinance loan is a new car loan that usually replaces your current loan from a different lender. Refinancing your car loan can help you save money by lowering your APR or by reducing your monthly payments." 
    },
    { 
      question: "What’s the difference between an interest rate and an APR?", 
      answer: "The interest rate is only one factor of the cost of the loan. The total cost can be understood by the APR which is the annual cost of a loan inclusive both of interest rate and all other associated fees. For example, the cost of an origination fee is included in the APR. When comparing loan products, it is important to compare the APR of each product" 
    },
    { 
      question: "How long will it take to get my money?", 
      answer: "Personal loan funds are transferred on the next business day if the terms are accepted before 5pm ET Monday-Friday excluding holidays. If the terms are accepted after 5pm ET, on a weekend, or on a holiday, the funds will be transferred on the following business day." 
    },
    { 
      question: "Will it affect my credit score?", 
      answer: "Checking your rate on Xpresstchotcho will not affect your credit score. If you proceed with your application after receiving a rate your credit score will be impacted. When you check your rate, we make a soft credit inquiry. Soft credit inquiries on your report do not lower your credit score, but you may see when you view your report that this inquiry was made. If you are offered a loan and proceed with the application, a hard credit inquiry will be completed to verify the accuracy of your application. This action will be recorded as an inquiry on your report and it will impact your credit score." 
    },
    { 
      question: "Do I pay a fee if I pay off my loan early?", 
      answer: "There is no prepayment penalty for paying off a loan on Xpresstchotcho early. You may pay off part or all of the loan at any time with no fee. By prepaying, you will pay less overall interest because the loan is outstanding for a shorter time." 
    },
  ];

  return (
    <div className="flex justify-center items-center bg-blue-50 py-10 px-4">
  <div className="w-full max-w-2xl">
    <h2 className="text-4xl font-semibold text-gray-900 text-center mb-6">
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

export default FAQ;
