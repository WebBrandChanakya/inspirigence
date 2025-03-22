import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Form from '../ui/Form';
import { LinksData } from "@/content/Links"
import Link from 'next/link';

const FormComponent = () => {
    const ContactLinks = LinksData.find(section => section.title === "Contact Info");
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-24">
                    <div className="flex items-center lg:mb-0 mb-10">
                        <div className="" >

                            <h4 className="text-gray-900 dark:text-white font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center">
                                Get A Free Consultation
                            </h4>
                            <Form />
                        </div>
                    </div>
                    <div className="lg:max-w-xl w-full h-[600px] flex items-center justify-center  bg-cover bg-no-repeat ">
                        <div className="">
                            <div className="lg:w-96 w-auto h-auto bg-white shadow-xl lg:p-6 p-4 rounded-lg">

                                {/* Contact Details */}
                                {ContactLinks.links.map((link, index) => (
                                    
                                    !link.isAddress && (<Link className="text-primary text-xl " href={link.href} key={index}>

                                        {link.label}
                                    </Link>)
                                ))}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default FormComponent