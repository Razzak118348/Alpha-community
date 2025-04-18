
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {

useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

    return (
        <div
        className="mt-16 text-justify bg-cover bg-center bg-no-repeat relative text-white py-20 px-4 md:px-16"
        style={{
            backgroundImage: "url('/src/assets/image/background.jpg')",
        }}
        >
            <div className="max-w-6xl mx-auto">
                <img
                    src="/src/assets/image/allComunity.jpg"
                    alt="Alpha Community"
                    className="w-full rounded-xl shadow-lg border border-purple-500 hover:scale-105 transition-transform duration-700"
                    data-aos="zoom-in"
                />

                <h2
                    className="text-3xl md:text-4xl font-bold text-center mt-10 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-600"
                    data-aos="fade-up"
                >
                    🎶 About Alpha Community
                </h2>

                <p
                    className="text-lg leading-relaxed text-gray-300 tracking-wide bg-zinc-900 p-6 rounded-lg shadow-inner border border-purple-600"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <span className="text-purple-400 font-semibold">Alpha Community</span> was founded in <span className="text-yellow-400 font-semibold">2025</span> at
                    <span className="text-green-400 font-semibold"> Metropolitan University Sylhet</span> with the goal of uniting passionate individuals to make a positive impact.
                    We focus on <span className="text-pink-400 font-semibold">growth, leadership</span>, and <span className="text-blue-400 font-semibold">community service</span>, bringing students together to
                    learn, lead, and inspire. With every beat and every step, we aim to create <span className="text-red-400 font-semibold">meaningful change</span> and
                    lasting <span className="text-indigo-400 font-semibold">memories</span>. Welcome to the rhythm of unity and change.
                </p>
            </div>
        </div>
    );
};

export default About;
