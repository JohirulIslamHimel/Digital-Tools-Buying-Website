import React from "react";

import heroImg from "../assets/banner.png";

const Banner = () => {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        {/* Left Content ( */}
        <div className="w-full md:w-1/2 text-left flex flex-col items-start">
          {/* Badge: New Tool */}
          <div className="inline-flex items-center gap-2.5 bg-[#F3E8FF] text-[#7C3AED] px-5 py-2 rounded-full mb-8 shadow-inner">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#7C3AED]"></span>
            </span>
            <span className="text-sm font-semibold tracking-wide">
              New: AI-Powered Tools Available
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-7xl font-black text-[#1F2937] leading-[1.1] md:leading-[1.05] tracking-tight mb-8">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12 max-w-xl font-medium">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none rounded-full px-10 h-16 font-bold capitalize text-xl shadow-lg shadow-purple-200 w-full sm:w-auto transition-all duration-300 transform hover:scale-105">
              Explore Products
            </button>

            <button className="btn btn-outline border-2 border-[#7C3AED] text-[#7C3AED] hover:bg-[#F3E8FF] hover:border-[#7C3AED] rounded-full px-10 h-16 font-bold capitalize text-xl w-full sm:w-auto transition-all duration-300 flex items-center justify-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z"
                />
              </svg>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Content (Hero Image) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="Hero Workflow"
            className="w-full h-auto max-w-lg md:max-w-full object-contain rounded-2xl shadow-2xl shadow-purple-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
