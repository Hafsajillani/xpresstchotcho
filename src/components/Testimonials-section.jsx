// Import necessary dependencies
import React from 'react';
import { SiTrustpilot } from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaLock } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

const Testimonials = () => {
  const [loading, setLoading] = React.useState(true);
  const [swiperRef, setSwiperRef] = React.useState(null); // State for Swiper reference

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="text-center py-16">Loading testimonials...</div>;
  }

  return (
    <div className="bg-blue-50 py-16 px-4">
      <div className="max-w-8xl mx-auto text-center">
      <h3 className="text-gray-900 font-semibold text-3xl font-bold mb-2">What our customers say
      </h3>

        {/* Testimonials slider */}
        <div className='bg-white border border-[#2448E9] rounded-md p-4 shadow-lg max-w-6xl mx-auto mt-8'>
          <div className="flex justify-center items-center space-x-2 mt-2 flex-wrap">
            <p className="text-[#434343]">Our customers say</p>
            <p className="text-lg font-semibold text-[#434343]">Excellent</p>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="p-1 mx-1" 
                  style={{ backgroundColor: '#2448E9' }} 
                >
                  <SiTrustpilot className="text-white text-lg" /> {/* White star */}
                </div>
              ))}
            </div>

            <p className="text-[#434343]">4.9 out of 5 based on reviews</p>
            <SiTrustpilot className="text-[#2448E9] text-lg" />
          </div>
          <div className="relative mt-4">
            <Swiper
              onSwiper={setSwiperRef} // Set swiper reference
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
                  <div className="bg-gray-200 w-120 rounded-sm p-4 shadow-lg text-left h-40 flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-sm text-black">{testimonial.name}</h3>
                      <h4 className="font-semibold text-sm text-black mt-1">{testimonial.title}</h4>
                      <p className="text-xs text-black mt-1 flex-grow">{testimonial.content}</p>
                    </div>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, index) => (
                        <div
                          key={index}
                          className="bg-[#2448E9] w-4 h-4 flex items-center justify-center mx-1" // Small square size
                        >
                          <SiTrustpilot className="text-white text-sm" /> {/* Smaller white star */}
                        </div>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation buttons */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-[-30px] z-10">
              <button
                className="bg-white rounded-full p-2 shadow-md flex items-center justify-center"
                onClick={() => swiperRef.slidePrev()}
              >
                <FaChevronLeft className="text-black" />
              </button>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-[-30px] z-10">
              <button
                className="bg-white rounded-full p-2 shadow-md flex items-center justify-center"
                onClick={() => swiperRef.slideNext()}
              >
                <FaChevronRight className="text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Check Rate Button */}
        
        <div className="flex flex-col items-center justify-center"> {/* Use flex-col for vertical stacking */}
      <a 
        href="/check-rate" 
        className="text-lg mt-6 font-medium bg-blue-600 text-white py-3 px-10 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Check your rate
      </a>
      <div className="mt-1">
        <button className="text-sm font-sm text-gray py-3 px-12 flex items-center">
          <FaLock className="mr-2" />
          <span className='text-gray font-bold'>Won't affect</span>
          <span className='ml-1'>your credit score</span> {/* Changed <p> to <span> for inline text */}
        </button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Testimonials;
