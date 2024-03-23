import { useState } from 'react';
import { Section } from '../';
import { navLinks } from '../../constants';
import Logo from '../../assests/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Section>
            <div className='flex items-center justify-between'>
                <div>
                    <img
                        src={Logo}
                        alt="Logo"
                        className="size-24 md:size-36 cursor-pointer"
                    />
                </div>

                <div className="hidden ss:flex space-x-6">
                    {navLinks.map(link => (
                        <a
                            key={link.id}
                            href={link.link}
                            className="bg-gradient-to-r text-transparent from-white to-gray-300 uppercase font-Code font-semibold cursor-pointer text-lg md:text-xl hover:text-gray-400 hover:scale-105 transition duration-300 bg-clip-text"
                        >
                            {link.name}
                        </a>

                    ))}
                </div>

                {/* Hamburger menu icon for small screens */}
                <div className="ss:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className={`w-6 h-6 ${isMenuOpen ? 'text-gray-400' : 'text-white'}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menu items for small screens */}
            <div className={`ss:hidden absolute z-10 w-full left-0 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="bg-gray-900 flex flex-col gap-8 py-4 px-6 rounded-md">
                    {navLinks.map(link => (
                        <a
                            key={link.id}
                            href={link.link}
                            className="bg-gradient-to-r text-transparent from-white to-gray-300 uppercase font-Code font-semibold cursor-pointer text-lg md:text-xl hover:text-gray-400 transition duration-300 bg-clip-text"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Header;
