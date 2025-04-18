import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from '../../Components/Banner';
import Navbar from '../../Components/Navbar';
import Letter from '../../Components/Letter';
import Journey from '../../Components/Journey';
import Expenditure from '../../Components/Expenditure';
import Sponsors from '../../Components/Sponsors';
import SponsorshipCriteria from '../../Components/SponsorshipCriteria';

import bgimg2 from "../../assets/image/background2.jpg";

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div
            style={{ backgroundImage: `url(${bgimg2})` }}
            className="w-full overflow-x-hidden mb-0 pb-3 h-full bg-cover bg-no-repeat bg-center"
        >
            <Banner />
            <div>
                <div data-aos="fade-up"><Letter /></div>
                <div data-aos="fade-right"><Journey /></div>
                <div data-aos="zoom-in-up"><Expenditure /></div>
                <div data-aos="fade-left"><Sponsors /></div>
                <div data-aos="fade-up"><SponsorshipCriteria /></div>

                {/* target community  */}
                <section className="bg-black text-white py-16 px-4 md:px-10 rounded-3xl md:rounded-full" data-aos="fade-up">
  <div className="max-w-5xl mx-auto text-center space-y-6">
    <h2 className="text-2xl md:text-5xl font-bold text-red-500 tracking-wide" data-aos="zoom-in">
      Alpha Community Presents
    </h2>
    <p className="text-lg md:text-xl leading-relaxed text-gray-300" data-aos="fade-up" data-aos-delay="200">
      Alpha Community is going to arrange a <span className="text-red-400 font-semibold">big concert event</span> with the entire Alpha family.
      As this is a concert event, there will be a huge number of audience including our current <span className="text-red-400 font-semibold">250+ members</span>, seniors, and well-wishers.
      This is more than just music — it's a celebration of unity, energy, and passion.
    </p>
    <p className="text-lg md:text-xl leading-relaxed text-gray-300" data-aos="fade-up" data-aos-delay="400">
      Reputed musical clubs from Sylhet like <span className="text-red-400 font-semibold">Nongar, Rim, Banned Community, Orpheus, Cosmic Ray, Flames</span>, and many more
      will be joining us to set the stage on fire 🔥.
    </p>
    <p className="text-lg md:text-xl leading-relaxed text-gray-300" data-aos="fade-up" data-aos-delay="600">
      As a grand <span className="text-red-500 font-bold">metal concert in Sylhet city</span>, we are expecting a massive crowd, electrifying performances, and a night to remember.
    </p>
    {/* <div data-aos="zoom-in-up" data-aos-delay="800">
      <span className="inline-block mt-8 px-6 py-3 border border-red-500 rounded-full text-red-500 hover:bg-red-500 hover:text-black transition duration-300 font-semibold">
        Get Ready to Rock 🤘
      </span>
    </div> */}
  </div>
</section>

            </div>
        </div>
    );
};

export default Home;
