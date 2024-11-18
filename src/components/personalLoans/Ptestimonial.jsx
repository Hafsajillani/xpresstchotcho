import React from "react";
import { SiTrustpilot } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaLock, FaChevronLeft, FaChevronRight } from "react-icons/fa";


const testimonials = [
    {
        name: "Hamish",
        title: "Thank you, Xpress Tchotcho, for being there when I needed it the most.",
        content: "Your support made a huge difference, and I’m grateful for the fast and reliable service. I appreciate everything you’ve done!",
      },
      {
        name: "Erith C",
        title: "Achieving My Dream in Less Than a Year",
        content: "In less than a year, I was able to purchase my dream car. I cannot thank you guys enough. I wish the company continued success and growth. Thank you, guys!",
      },
      {
        name: "NBeaubrun",
        title: "Thank you, Xpress Tchotcho, for resolving my problems so quickly!",
        content: "Your assistance was truly invaluable, and I appreciate the speed and efficiency with which you handled everything. Your dedication made a real difference—thank you.",
      },
      {
        name: "Dany",
        title: "Thank You, Xpress Tchotcho, for Everything!",
        content: "Your support has truly made a difference.",
      },
      // New Testimonials
      {
        name: "Jessica",
        title: "Fantastic Experience!",
        content: "I had a wonderful experience with Xpress Tchotcho. The staff was friendly and very helpful!",
      },
      {
        name: "Mike",
        title: "Highly Recommend!",
        content: "Great service and support. I will definitely use Xpress Tchotcho again in the future.",
      },
];

const TestimonialSection = () => {
  const swiperRef = React.useRef(null);

  const slideNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const slidePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">
          We've helped our customers
        </h2>

        {/* Image and Text Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6">
  {/* Image Section */}
  <div className="rounded-lg overflow-hidden mb-6 lg:mb-0 lg:w-1/3">
    <img
      src="/assets/personalloan-woman.jpg"
      alt="Customer"
      className="h-[200px] w-[350px] lg:h-[200px] lg:w-[350px] object-cover rounded-lg"
    />
  </div>

          {/* Text Section */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <p className="text-gray-700 text-lg mb-4">
              Dayana was able to pay down her debt with an $4,000 personal loan
              through Xpresstchotcho.
            </p>
            <blockquote className="text-gray-600 italic text-lg">
              "You have no idea what that loan did for me. Thank you Xpresstchotcho for
              really being that light at the end of a tunnel."
            </blockquote>
          </div>
        </div>

        {/* Testimonials Slider Section */}
        <div className="mt-12">
          <div className="max-w-6xl mx-auto text-center">

            <div className="bg-white border border-[#2448E9] rounded-md p-4 shadow-lg max-w-6xl mx-auto mt-8">
              <div className="flex justify-center items-center space-x-2 mt-2 flex-wrap">
                <p className="text-lg font-semibold text-[#434343]">
                  Excellent
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className="p-1 mx-1"
                      style={{ backgroundColor: "#2448E9" }}
                    >
                      <SiTrustpilot className="text-white text-lg" />
                    </div>
                  ))}
                </div>
                <p className="text-[#434343]">4.9 out of 5 based on reviews</p>
                <SiTrustpilot className="text-[#2448E9] text-lg" />
              </div>

              {/* Swiper Slider */}
              <div className="relative mt-4">
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-gray-200 w-full rounded-sm p-4 shadow-lg text-left h-40 flex flex-col justify-between">
                      <div>
                        <h3 className="font-medium text-sm text-black">
                          {testimonial.name}
                        </h3>
                        <h4 className="font-semibold text-sm text-black mt-1">
                          {testimonial.title}
                        </h4>
                        <p className="text-xs text-black mt-1 flex-grow">
                          {testimonial.content}
                        </p>
                      </div>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, index) => (
                          <div
                            key={index}
                            className="bg-[#2448E9] w-4 h-4 flex items-center justify-center mx-1"
                          >
                            <SiTrustpilot className="text-white text-sm" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

                {/* Navigation Buttons */}
                <div className="absolute top-1/2 transform -translate-y-1/2 left-[-30px] z-10">
                  <button onClick={slidePrev}
                  className="bg-white rounded-full p-2 shadow-md flex items-center justify-center">
                    <FaChevronLeft className="text-black" />
                  </button>
                </div>
                <div onClick={slideNext}
                className="absolute top-1/2 transform -translate-y-1/2 right-[-30px] z-10">
                  <button className="bg-white rounded-full p-2 shadow-md flex items-center justify-center">
                    <FaChevronRight className="text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Check Rate Button */}
        <div className="flex flex-col items-center justify-center mt-8">
        <div className="flex justify-center mb-2">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-bold">
            Check your rate
          </button>
        </div>
        <p className="text-sm text-gray-500 flex items-center justify-center">
          <FaLock className="h-4 w-4 text-black mr-1" />{" "}
          <span className="font-semibold text-black mr-1">Won’t affect</span>
          <span className="ml-1">your credit score.</span>
        </p>
        <p className="text-sm text-gray-500 mt-8 flex items-center justify-center">
          Excellent 4.9 out of 5
          <SiTrustpilot className="ml-6 mr-2 text-[#2448E9] text-lg" /> Trustpilot
        </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
