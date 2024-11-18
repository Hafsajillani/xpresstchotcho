import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-white shadow z-50 w-full">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src="/assets/logo.ico" alt="logo" className="w-8 h-8" />
        <a href="/home"><span className="text-2xl font-bold text-gray-900">Xpresstchotcho</span></a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-base font-medium text-gray-900">
        <a href="/about" className="hover:text-blue-600 transition duration-200">
          ABOUT US
        </a>

        {/* Dropdown Menu */}
        <div className="relative group">
          {/* Dropdown Trigger */}
          <button className="text-gray-900 hover:text-blue-600 focus:outline-none">
            BORROW
          </button>

          {/* Dropdown Content */}
          <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
            <ul className="py-2">
              {/* Personal Loans */}
              <li>
                <h3 className="text-md font-semibold text-gray-600 px-4 py-2">
                  Personal Loans
                </h3>
                <ul>
                  <li>
                    <Link to="/personal-loan">
                      <span className="block px-4 py-1 text-blue-600 underline hover:bg-gray-50">
                        Explore Personal Loans
                      </span>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-1 text-blue-600 underline hover:bg-gray-50"
                    >
                      Education Loans
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-1 text-blue-600 underline hover:bg-gray-50"
                    >
                      Home Improvement Loans
                    </a>
                  </li>
                </ul>
              </li>

              {/* Car Loan Refinance */}
              <li>
                <h3 className="text-md font-semibold text-gray-600 px-4 py-2 mt-4">
                  Car Loan Refinance
                </h3>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-1 text-blue-600 underline hover:bg-gray-50"
                    >
                      Refinance Your Car
                    </a>
                  </li>
                </ul>
              </li>

              {/* Short-Term Relief */}
              <li>
                <h3 className="text-md font-semibold text-gray-600 px-4 py-2 mt-4">
                  Short-Term Relief
                </h3>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-1 text-blue-600 underline hover:bg-gray-50"
                    >
                      Relief Loans
                    </a>
                  </li>
                </ul>
              </li>

              {/* Consolidation */}
              <li>
                <h3 className="text-md font-semibold text-gray-600 px-4 py-2 mt-4">
                  Consolidation
                </h3>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-1 text-blue-600 underline hover:bg-gray-50"
                    >
                      Debt Consolidation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-1 text-blue-600 underline hover:bg-gray-50"
                    >
                      Credit Card Consolidation
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Call-to-Action Button */}
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Check Your Rate
              </button>
            </div>
          </div>
        </div>

        <a
          href="/contact-us"
          className="text-gray-900 hover:text-blue-600 transition duration-200"
        >
          CONTACT US
        </a>
        <a href="/login" className="text-gray-900 hover:text-blue-600 transition duration-200">
          LOGIN
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-600 focus:outline-none"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 md:hidden z-50">
          <a
            href="/about"
            className="block py-2 text-gray-600 hover:text-gray-800 transition duration-200"
          >
            About Us
          </a>
          <a
            href="/services"
            className="block py-2 text-gray-600 hover:text-gray-800 transition duration-200"
          >
            Services
          </a>
          <a
            href="/contact-us"
            className="block py-2 text-gray-600 hover:text-gray-800 transition duration-200"
          >
            Contact Us
          </a>
          <a
            href="/login"
            className="block py-2 text-gray-600 hover:text-gray-800 transition duration-200"
          >
            Login
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
