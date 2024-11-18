import React from 'react';

function Footer() {
  return (
    <footer className="bg-white p-8 border-t">
      <div className="max-w-6xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Products */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">PRODUCTS</h3>
            <ul className="space-y-2">
              {['Personal Loans', 'Wedding Loans', 'Home Improvement Loans', 'Moving Loans', 'Medical Loans', 'Debt Consolidation', 'Credit Card Consolidation', 'Car Refinance Loans', 'Short-Term Relief'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-600 underline hover:no-underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Tools and Resources */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">TOOLS AND RESOURCES</h3>
            <ul className="space-y-2">
              {['Learn', 'Credit Score', 'Loan Calculator', 'Payment Calculator', 'Interest Calculator', 'Inflation Calculator', 'Help Center', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-600 underline hover:no-underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">LEGAL</h3>
            <ul className="space-y-2">
              {['Terms of Use', 'State Licenses', 'Privacy Policy', 'Accessibility', 'Your Privacy Choices', 'Data Collection and Use'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-600 underline hover:no-underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Borrower Support */}
          <div>
            <h3 className="font-bold text-gray-900 mb-2">BORROWER SUPPORT</h3>
            <p className="text-blue-600 font-bold hover:no-underline underline">(954) 245-1640</p>
            <p className="text-gray-600 mt-2">
              The information on this website does not constitute an offer to sell securities or a solicitation of an offer to buy securities. Further, none of the information contained on this website is a recommendation to invest in any securities.
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t pt-6">

          {/* Copyright Information */}
          <p className="text-gray-600 text-center text-sm my-4 md:my-0">
            Copyright © 2021 - 2024 Xpresstchotcho Network, Inc. All rights reserved. North Miami, FL 33161, United States
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter">
              <img src="/assets/twitter.png" alt="Twitter Icon" className="h-6" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src="/assets/facebook.png" alt="Facebook Icon" className="h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
