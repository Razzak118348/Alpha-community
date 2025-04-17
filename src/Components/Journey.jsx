import React from 'react';

import JourneyImg from "../assets/image/ourJourney.jpg"
import JourneyImg2 from "../assets/image/recentPerformance10.jpg"

const Journey = () => {
    return (

    <div>
    <div className="hero  my-20 ">
      <div className=" hero-content flex flex-col lg:flex-row">
      <div className="lg:w-1/2 relative ">
      <img
          src={JourneyImg}
          className="w-3/4 rounded-lg shadow-2xl" />
          <img src={JourneyImg2}  className="w-1/4 absolute right-5 top-1/2 rounded-lg shadow-2xl border-4  border-white" alt="" />
      </div>
      <div className="lg:w-1/2 mt-16 p-4 lg:p-8 lg:mt-0 space-y-4
                bg-gradient-to-br from-[#1f1f1f]/90 via-[#2c2c2c]/80 to-transparent
                rounded-lg border border-gray-600 backdrop-blur-sm shadow-lg text-white">
  <h1 className="text-xl lg:text-2xl font-bold text-red-500">Our Journey</h1>

  <p className="py-6 text-justify text-gray-200">
    Founded in 2025, Alpha Community started as a small group of passionate music lovers in Sylhet.
    Over time, we’ve grown into a vibrant musical club dedicated to organizing unforgettable concerts
    and celebrating the soul of live music. Our mission is to elevate the local music scene — one event at a time.
  </p>
</div>

      </div>
    </div>
            </div>
    );
};

export default Journey;