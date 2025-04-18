import React from 'react';

const Sponsors = () => {
    return (
        <div className="max-w-4xl mx-auto md-10 md:my-16 lg:my-20  p-6 bg-gradient-to-br from-[#1a1a1a]/90 to-[#000000]/85 text-white rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-center text-yellow-400">🎟️ SPONSORSHIP PACKAGE</h2>

            <div className="space-y-4 text-lg font-medium">
                <div className="flex justify-between border-b border-gray-600 pb-2">
                    <span className="text-red-400">Title Sponsor</span>
                    <span className="text-green-400">1,50,000 BDT</span>
                </div>
                <div className="flex justify-between border-b border-gray-600 pb-2">
                    <span className="text-red-300">Co-Sponsor</span>
                    <span className="text-green-400">1,00,000 BDT</span>
                </div>
                <div className="flex justify-between border-b border-gray-600 pb-2">
                    <span className="text-orange-300">Golden Sponsor</span>
                    <span className="text-green-400">50,000 BDT</span>
                </div>
                <div className="flex justify-between border-b border-gray-600 pb-2">
                    <span className="text-gray-300">Silver Sponsor</span>
                    <span className="text-green-400">30,000 BDT</span>
                </div>
                <div className="flex justify-between border-b border-gray-600 pb-2">
                    <span className="text-pink-300">Food Stall</span>
                    <span className="text-green-400">15,000 BDT</span>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;