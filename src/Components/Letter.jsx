import React from 'react';

const Letter = () => {
  return (
    <div className="mt-5 md:mt-16 lg:w-[60rem] mx-auto p-6
                    bg-gradient-to-br from-[#1a1a1a]/90 via-[#2b2b2b]/80 to-transparent
                    shadow-md rounded-md text-gray-200 border border-gray-600 backdrop-blur-sm">

      <p className="mb-4">Dear Sir/Ma'am,</p>

      <p className="mb-4">
        We are <strong className="text-red-400">Alpha Community</strong>, a newly formed musical club based in Sylhet, led by a passionate team with years of experience organizing successful concerts and cultural events.
      </p>

      <p className="mb-4">
        We are excited to announce our upcoming <strong className="text-red-400">Grand Musical Concert</strong> scheduled for <strong className="text-yellow-400">May 17, 2025</strong>. This special event will feature a renowned celebrity band from Bangladesh and will be hosted at a prominent venue in Sylhet, attracting a large and diverse audience.
      </p>

      <p className="mb-4">
        To ensure the success of this concert, we are seeking financial sponsorship from esteemed organizations like yours. Your continued support for cultural and social initiatives is deeply appreciated, and we believe that your involvement in this event will significantly contribute to the growth of the local music scene.
      </p>

      <p className="mb-4">
        As a sponsor, your brand will receive extensive visibility across our event promotions — including banners, posters, apparel, social media, and other digital platforms — depending on the sponsorship package selected.
      </p>

      <p className="mb-4">
        We sincerely hope you will consider supporting us in this exciting endeavor. Your sponsorship will not only help make this event a grand success but will also play a valuable role in enriching the cultural landscape of Sylhet.
      </p>

      <p>Thank you for your time and consideration.</p>

      <p className="mt-6">Sincerely,</p>
      <p className="text-red-400 font-semibold">Alpha Community</p>
    </div>
  );
};

export default Letter;
