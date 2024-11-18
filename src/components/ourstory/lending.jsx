import React from "react";

const AboutSection = () => {
  return (
    <section className="flex flex-col items-center p-6 md:p-12 bg-gray-100">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">
        More accurate, efficient, and inclusive lending
      </h2>
      
      {/* Subtitle Paragraph */}
      <p className="text-center text-gray-600 mb-8 max-w-2xl">
        With Xpresstchotcho, lenders can approve more applicants at lower rates across races, ages, and genders, while
        simultaneously delivering the exceptional digital-first experience customers demand.
      </p>

      {/* Info Card Section */}
      <div className="p-6 md:p-8 flex flex-col md:flex-row items-center max-w-4xl w-full">
        <img
        src="/assets/about.png"
        />
      </div>
    </section>
  );
};

export default AboutSection;
