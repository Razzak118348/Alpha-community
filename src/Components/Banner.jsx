// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import images
import bgimg1 from "../assets/image/Alpha Community.png";
import bgimg2 from "../assets/image/banner4.png";
import bgimg3 from "../assets/image/Banner2.png";
import bgimg4 from "../assets/image/banner1.png";

// Slide data
const allSlides = [
    { image: bgimg1 },
    { image: bgimg2 },
    { image: bgimg3 },
    { image: bgimg4 },

];

const Banner = () => {
    return (
        <div className='w-full mt-2 md:mt-10 lg:mt-20'>
            <Swiper
                className='w-full text-center overflow-hidden'
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
            >
                {allSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className='w-full h-[30rem] object-contain'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
