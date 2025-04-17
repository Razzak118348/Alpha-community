import React from 'react';
import Banner from '../../Components/Banner';
import Navbar from '../../Components/Navbar';
import Letter from '../../Components/Letter';
import Journey from '../../Components/Journey';

import bgimg from "../../assets/image/background.jpg";
import bgimg1 from "../../assets/image/background1.jpg";
import bgimg2 from "../../assets/image/background2.jpg";
import bgimg3 from "../../assets/image/background3.jpg";
import Expenditure from '../../Components/Expenditure';
import Sponsors from '../../Components/Sponsors';
import SponsorshipCriteria from '../../Components/SponsorshipCriteria';
const Home = () => {
    return (
        <div
            style={{ backgroundImage: `url(${bgimg2})` }}
            className='w-full mb-0 pb-3 h-full bg-cover bg-no-repeat bg-center'
        >
            <Navbar></Navbar>
            <Banner></Banner>
            <Letter></Letter>
<Journey></Journey>
<Expenditure></Expenditure>
<Sponsors></Sponsors>
<SponsorshipCriteria></SponsorshipCriteria>
        </div>
    );
};

export default Home;