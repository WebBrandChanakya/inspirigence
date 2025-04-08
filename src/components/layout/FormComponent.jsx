import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Follow, LinksData } from "@/content/Links";
import Form from '../ui/Form';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';

const FormComponent = () => {
    const ContactLinks = LinksData.find(section => section.title === "Contact Info");
    return (
        <section id="quote"  className=" bg-primarybg">
            <div className=" max-w-7xl mx-auto py-12">
                <div className="grid lg:grid-cols-3 grid-cols-1 p-4">
                    
                    <div className=" flex  bg-primary rounded-tl-xl rounded-bl-xl py-24 px-8 ">
                        <div className="">
                            <h4 className="text-white font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center">
                                Contact Information
                            </h4>
                            <div className=" w-auto flex flex-col space-y-10 h-auto">

                                {/* Contact Details */}
                                {ContactLinks.links.map((link, index) => (

                                    !link.isAddress && (<Link className=" text-white text-xl " href={link.href} key={index}>

                                        {link.label}
                                    </Link>)
                                ))}
                                <h4 className="text-white font-manrope text-3xl font-semibold leading-10 mb-9 lg:text-left text-center">
                                    Follow Us
                                </h4>
                                <div className="flex space-x-12 ">
                                    <Link href={Follow.Facebook}> <FaFacebook className="text-3xl text-white cursor-pointer hover:text-gray-600" /></Link>
                                    <Link href={Follow.Instagram}> <FaInstagram className="text-3xl text-white cursor-pointer hover:text-gray-600" /></Link>
                                    <Link href={Follow.LinkedIn}><FaLinkedin className="text-3xl text-white cursor-pointer hover:text-gray-600" /></Link>
                                    <Link href={Follow.Twitter}><FaXTwitter className="text-3xl text-white cursor-pointer hover:text-gray-600" /></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex items-center col-span-2 rounded-tr-xl rounded-br-xl pl-24 bg- py-24 lg:mb-0 mb-10 dark:bg-darkLvl1 bg-white">
                        <div className="pl-8  w-3/4 " >

                            <h4 className="text-gray-900 dark:text-white font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center">
                                Get A Free Consultation
                            </h4>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default FormComponent