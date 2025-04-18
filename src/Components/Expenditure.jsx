import React from 'react';

const Expenditure = () => {
    return (
        <div className="my-10  max-w-4xl mx-auto lg:my-28 p-6 bg-gradient-to-br from-[#1f1f1f]/90 to-[#000000]/80 text-white rounded-lg shadow-xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-center text-red-500">Gross Expenditure For The Celebration</h2>

            <div className="space-y-4 text-lg font-medium">
                <div className="flex justify-between border-b border-gray-600 pb-2">
                    <span>GUEST BAND</span>
                    <span className="text-green-400">2,50,000 BDT</span>
                </div>
                <div className="flex justify-between border-b border-gray-600 pb-2">
                    <span>SOUND & LIGHT</span>
                    <span className="text-green-400">70,000 BDT</span>
                </div>
                <div className="flex justify-between border-b border-gray-600 pb-2">
                    <span>DECORATION (STAGE & SECURITY)</span>
                    <span className="text-green-400">60,000 BDT</span>
                </div>
                <div className="flex justify-between border-b border-gray-600 pb-2">
                    <span>LED BACKDROP</span>
                    <span className="text-green-400">50,000 BDT</span>
                </div>
                <div className="flex justify-between border-b border-gray-600 pb-2">
                    <span>BANNER & POSTER</span>
                    <span className="text-green-400">10,000 BDT</span>
                </div>
                <div className="flex justify-between border-b border-gray-600 pb-2">
                    <span>MEDIA COVERAGE</span>
                    <span className="text-green-400">15,000 BDT</span>
                </div>

                <div className="flex justify-between border-t border-gray-500 pt-4 mt-6 text-xl font-bold">
                    <span>Total</span>
                    <span className="text-red-500">4,55,000 BDT</span>
                </div>
            </div>
        </div>
    );
};

export default Expenditure;
