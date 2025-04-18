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
            className='w-full mb-0 pb-3 h-full bg-cover bg-no-repeat bg-center'
        >
            <Navbar />
            <Banner />
            <div>
                <div data-aos="fade-up"><Letter /></div>
                <div data-aos="fade-right"><Journey /></div>
                <div data-aos="zoom-in-up"><Expenditure /></div>
                <div data-aos="fade-left"><Sponsors /></div>
                <div data-aos="fade-up"><SponsorshipCriteria /></div>
            </div>
        </div>
    );
};

export default Home;
