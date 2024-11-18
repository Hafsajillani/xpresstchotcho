import React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { SiTrustpilot } from "react-icons/si";

const PersonalMain = () => {
  return (
    <div
      className="flex items-start mt-16 h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/pmain.jpg')" }} // Replace with your image path
    >
      {/* Overlay Section */}
      <div className="bg-white mt-16 rounded-lg shadow-xl p-10 max-w-lg w-full ml-12">
        <h1 className="text-center text-3xl font-bold mb-8">
          A personal loan for your personal needs
        </h1>
        <ul className="mb-6 space-y-4">
          <li className="flex items-center">
            <svg
              className="h-6 w-6 text-blue-600 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414L8 15.414l-4.707-4.707a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Check your rate in 5 minutes.
          </li>
          <li className="flex items-center">
            <svg
              className="h-6 w-6 text-blue-600 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414L8 15.414l-4.707-4.707a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Get funds sent in as fast as 1 business day.
          </li>
          <li className="flex items-center">
            <svg
              className="h-6 w-6 text-blue-600 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414L8 15.414l-4.707-4.707a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            38% lower rates than a traditional model.
          </li>
        </ul>
        <div className="flex justify-center mb-2">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-bold">
            Check your rate
          </button>
        </div>
        <p className="text-sm text-gray-500 flex items-center justify-center">
          <LockClosedIcon className="h-4 w-4 text-black mr-1" />{" "}
          <span className="font-semibold text-black mr-1">Won’t affect</span>
          <span className="ml-1">your credit score.</span>
        </p>
        <p className="text-sm text-gray-500 mt-8 flex items-center justify-center">
          Excellent 4.9 out of 5
          <SiTrustpilot className="ml-6 mr-2 text-[#2448E9] text-lg" /> Trustpilot
        </p>
      </div>
    </div>
  );
};

export default PersonalMain;
