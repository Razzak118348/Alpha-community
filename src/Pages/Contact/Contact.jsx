import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLoaderData } from 'react-router-dom';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const allMembers = useLoaderData();
    console.log("allMembers", allMembers);

    if (!Array.isArray(allMembers)) {
        return <div className=" pt-20 text-center">No member data found.</div>;
    }

    return (
        <div className="bg-black min-h-screen pt-20 px-4 flex flex-col items-center ">
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-10" data-aos="zoom-in">
                📇 Our Contact Team
            </h1>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
                {allMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-br from-zinc-900 via-gray-800 to-black text-white rounded-2xl shadow-2xl p-8 border border-gray-700 flex flex-col items-center"
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-32 h-32 rounded-full object-cover border-4 border-red-500 shadow-lg mb-4"
                        />
                        <h2 className="text-xl font-bold text-red-400 mb-2">{member.role}</h2>
                        <p className="text-lg font-semibold">{member.name}</p>
                        <p className="text-sm text-gray-300 mt-1">
                            📧 <a href={`mailto:${member.email}`} className="text-blue-400 hover:underline">{member.email}</a>
                        </p>
                        <p className="text-sm text-gray-300 mt-1">📞 {member.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;
