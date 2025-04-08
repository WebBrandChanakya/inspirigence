'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import DarkModeToggle from '../ui/DarkModeToggle';
import { LinksData } from '@/content/Links';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navLinks = LinksData.find(section => section.title === "Quick Links");
    
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="bg-white dark:bg-secondary sticky w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                        src="/images/logo/logo-footer.png"
                        width={250}
                        height={100}
                        className="rounded-lg"
                        alt="Inspirigence Advisors | Financial Services"
                    />
                </a>
                
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <DarkModeToggle />
                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-secondary dark:text-white">
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex relative flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        {navLinks?.links.map((link, index) => (
                            <li key={index} className=" group">
                                {link.label === "Services" && link.subLinks ? (
                                    <>
                                        <Link 
                                        href="/services"
                                            onMouseEnter={() => setDropdownOpen(true)}
                                            onMouseLeave={() => setDropdownOpen(false)}
                                            onClick={toggleDropdown}
                                            className="flex items-center py-2 px-3 text-secondary hover:text-primary rounded-sm dark:text-white hover:dark:text-primary"
                                        >
                                            {link.label} <FiChevronDown size={16} className="ml-1" />
                                        </Link>
                                        <div className={`absolute -left-1/3 space-x-4  bg-white border  dark:bg-primary overflow-hidden shadow-lg rounded-lg ${dropdownOpen ? 'block' : 'hidden'}`}
                                            onMouseEnter={() => setDropdownOpen(true)}
                                            onMouseLeave={() => setDropdownOpen(false)}
                                           >
                                            <div className="bg-[#023a5124] flex p-10">
                                            {link.subLinks.map((subLink, subIndex) => (
                                                <ul key={subIndex} >
                                                    <Link href={subLink.href} className="block font-bold text-nowrap px-4  text-secondary ">
                                                        {subLink.label}
                                                    </Link>
                                                    
                                                    <li>
                                                        {subLink.subServices&&subLink.subServices.map((subService)=>{
                                                            return (
                                                            <Link href={subService.href} className="block px-4 py-2 text-nowrap text-gray-700 dark:text-gray-50 dark:hover:text-secondary hover:text-primary ">
                                                                {subService.label}
                                                            </Link>)
                                                        })}
                                                    </li>
                                                </ul>
                                            ))}
                                            </div>
                                            
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="block py-2 px-3 text-secondary hover:text-primary rounded-sm dark:text-white hover:dark:text-primary"
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;