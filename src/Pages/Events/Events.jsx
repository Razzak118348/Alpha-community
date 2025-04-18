import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Events = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <div className="bg-black text-white py-16 px-4 md:px-16">
            {/* Section 1: Recent Performance */}
            <div className="mb-20" data-aos="fade-up">
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                    🎶 Recent Performance on the Grand Fest
                </h3>
                <p className="text-center text-gray-300 mb-10 text-lg">
                    Organized by Metropolitan University Business Club
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        "recentPerformance1.jpg",
                        "recentPerformance2.jpg",
                        "recentPerformance3.jpg",
                        "recentPerformance4.jpg",
                        "recentPerformance5.jpg",
                        "recentPerformance6.jpg",
                        "recentPerformance7.jpg",
                        "recentPerformance8.jpg",
                    ].map((img, index) => (
                        <img
                            key={index}
                            src={`/assets/image/${img}`}
                            alt={`Performance ${index + 1}`}
                            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        />
                    ))}
                </div>
            </div>

            {/* Section 2: Breaking the Fast with Madrasha Students */}
            <div data-aos="fade-up">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    🍽️ Breaking the Fast with Madrasha Students
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        "EventMadrasa.jpg",
                        "eventMadrasa2.jpg",
                    ].map((img, index) => (
                        <img
                            key={index}
                            src={`/assets/image/${img}`}
                            alt={`Event Madrasha ${index + 1}`}
                            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                        />
                    ))}
                </div>
            </div>

            <h1 className="text-2xl mt-10 md:mt-16  md:text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-600">
                    🍽️ Alpha community Iftar  Party in 2025
                </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    "alphaIftar1.jpg",
                    "alphaIftar2.jpg",
                    "alphaIftar3.jpg",
                    "alphaIftar4.jpg",
                ].map((img, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                    >
                        <img
                            src={`/assets/image/${img}`}
                            alt={`Performance ${index + 1}`}
                            className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Events;
