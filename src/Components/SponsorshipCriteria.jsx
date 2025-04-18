import AOS from 'aos';
import 'aos/dist/aos.css';



import  { useEffect } from "react";

const SponsorshipCriteria = () => {

useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

    return (
        <div
            className="max-w-6xl mx-auto my-16 p-6 bg-gradient-to-br from-black via-gray-900 to-zinc-800 text-white rounded-lg shadow-lg border border-gray-700"
            data-aos="fade-up"
        >
            <h2
                className="text-2xl md:text-3xl font-bold mb-10 text-center text-red-500"
                data-aos="zoom-in"
            >
                📋 Sponsorship Criteria
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Title Sponsor */}
                <div className="bg-zinc-900 p-6 rounded-lg border border-yellow-600 shadow-inner" data-aos="fade-right">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-4">🎤 TITLE SPONSOR</h3>
                    <p className="mb-4">The name will be promoted as <strong>TITLE SPONSOR</strong> and placed in every publicity material:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                        <li>Backdrop</li>
                        <li>LED Backdrop</li>
                        <li>Poster</li>
                        <li>Banner</li>
                        <li>Ticket</li>
                        <li>Media Coverage</li>
                    </ul>
                </div>

                {/* Co-Sponsor */}
                <div className="bg-zinc-900 p-6 rounded-lg border border-blue-500 shadow-inner" data-aos="fade-left">
                    <h3 className="text-xl font-semibold text-blue-300 mb-4">🎶 CO-SPONSOR</h3>
                    <p className="mb-4">The name will be promoted as <strong>CO-SPONSOR</strong> and placed in every publicity material:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                        <li>Backdrop</li>
                        <li>Poster</li>
                        <li>Banner</li>
                        <li>Ticket</li>
                        <li>Media Coverage</li>
                        <li>Projection in the Event</li>
                    </ul>
                </div>

                {/* Diamond Sponsor */}
                <div className="bg-zinc-900 p-6 rounded-lg border border-purple-500 shadow-inner" data-aos="fade-right">
                    <h3 className="text-xl font-semibold text-purple-300 mb-4">💠 DIAMOND SPONSOR</h3>
                    <p className="mb-4">The name will be promoted as <strong>DIAMOND SPONSOR</strong> and placed in every publicity material:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                        <li>Backdrop</li>
                        <li>Poster</li>
                        <li>Banner</li>
                        <li>Media Coverage</li>
                        <li>Projection in the Show</li>
                    </ul>
                </div>

                {/* Golden Sponsor */}
                <div className="bg-zinc-900 p-6 rounded-lg border border-yellow-500 shadow-inner" data-aos="fade-left">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-4">🏆 GOLDEN SPONSOR</h3>
                    <p className="mb-4">The name will be promoted as <strong>GOLDEN SPONSOR</strong> and featured on:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                        <li>Backdrop</li>
                        <li>Poster</li>
                        <li>Banner</li>
                        <li>Media Coverage</li>
                        <li>Projection in the Show</li>
                    </ul>
                </div>

                {/* Silver Sponsor */}
                <div className="bg-zinc-900 p-6 rounded-lg border border-gray-400 shadow-inner" data-aos="fade-right">
                    <h3 className="text-xl font-semibold text-gray-300 mb-4">🥈 SILVER SPONSOR</h3>
                    <p className="mb-4">The name will be promoted as <strong>SILVER SPONSOR</strong> and featured on:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                        <li>Backdrop</li>
                        <li>Poster</li>
                        <li>Banner</li>
                        <li>Media Coverage</li>
                        <li>Projection in the Show</li>
                    </ul>
                </div>

                {/* Food Stall Sponsor */}
                <div className="bg-zinc-900 p-6 rounded-lg border border-green-500 shadow-inner" data-aos="fade-left">
                    <h3 className="text-xl font-semibold text-green-300 mb-4">🍱 FOOD STALL SPONSOR</h3>
                    <p className="mb-4">The name will be promoted as <strong>FOOD STALL SPONSOR</strong> and highlighted through:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                        <li>Backdrop</li>
                        <li>Banner</li>
                        <li>Media Coverage</li>
                        <li>Projection in the Show</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SponsorshipCriteria;
