// DisclaimerSection.jsx
import React from 'react';

const DisclaimerSection = () => {
  return (
    <div className="p-8 text-sm text-gray-700">
      <p className="mb-4">
        * All unsecured personal loans through Upstart offer a fixed rate and range between 7.4% - 35.99% APR based on 5-year rates offered in September 2024. Your APR will be determined based on your credit, income, and certain other information provided in your loan application. Not all applicants will be approved.
      </p>
      <ol className="space-y-2">
        <li>
          1. When you check your rate, we check your credit report. This <span className="font-semibold">(soft) inquiry</span> will not affect your credit score. If you accept your rate and proceed with your application, we do another <span className="font-semibold">(hard)</span> credit inquiry that will impact your credit score. If you take out a loan, repayment information may be reported to the credit bureaus.
        </li>
        <li>
          2. As of publication in September 2024, and based on a comparison between the Upstart model and a hypothetical traditional model using Upstart data from Jan - Dec 2023. For more information on the methodology behind this study, please see Upstart’s Annual Access to Credit results <a href="#" className="text-blue-600 hover:underline">here</a>.
        </li>
        <li>
          3. The majority of unsecured loan borrowers on the Upstart marketplace are able to receive an instant decision upon submitting a completed application, without providing additional supporting documents; however, final approval is conditioned upon passing the hard credit inquiry. Loan processing may be subject to longer wait times if additional documentation is required for review.
        </li>
        <li>
          4. If you accept your loan by 5pm EST (not including weekends or holidays), your funds will be sent on the next business day. When the funds will be available to you will depend on your bank’s transaction processing time and policies.
        </li>
      </ol>
    </div>
  );
};

export default DisclaimerSection;
