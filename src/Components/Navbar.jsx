import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/image/logo.jpg";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='bg-black text-white fixed top-0 w-full z-20 shadow-md '>
            <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
                {/* Logo */}
                <div className='flex items-center gap-2'>
                    <img className='h-10 w-auto' src={logo} alt='Rock Brand Logo' />
                    <Link to='/' className='font-extrabold text-xl tracking-widest text-red-500 hover:text-white transition-all duration-200'>
                        Alpha Community
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className='hidden md:flex gap-8 items-center text-sm font-semibold'>
                    <li>
                        <Link to='/' className='hover:text-red-500 transition duration-200'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about' className='hover:text-red-500 transition duration-200'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/events' className='hover:text-red-500 transition duration-200'>Events</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='hover:text-red-500 transition duration-200'>Contact</Link>
                    </li>
                </ul>

                {/* Hamburger for Mobile */}
                <div className='md:hidden'>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='text-red-500 hover:text-white transition-all duration-200'
                    >
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            ) : (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='md:hidden bg-black text-white shadow-lg'>
                    <ul className='flex flex-col gap-4 px-6 py-4 text-sm font-semibold'>
                        <li><Link to='/' onClick={() => setIsMenuOpen(false)} className='hover:text-red-500 transition duration-200'>Home</Link></li>
                        <li><Link to='/about' onClick={() => setIsMenuOpen(false)} className='hover:text-red-500 transition duration-200'>About Us</Link></li>
                        <li><Link to='/events' onClick={() => setIsMenuOpen(false)} className='hover:text-red-500 transition duration-200'>Events</Link></li>
                        <li><Link to='/contact' onClick={() => setIsMenuOpen(false)} className='hover:text-red-500 transition duration-200'>Contact</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
