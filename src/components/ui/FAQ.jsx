"use client"
import React, { useState, useRef } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';


const FAQ = ({faqs}) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-primarybg">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-4xl font-manrope text-center font-bold dark:text-white text-secondary leading-[3.25rem]">
                        Frequently Asked Questions
                    </h2>
                </div>
                <div className="space-y-8">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border border-solid border-gray-300 p-4 rounded-xl transition-all duration-500 overflow-hidden ${activeIndex === index ? 'bg-primarybg border-primary' : ''}`}
                        >
                            <button
                                className="flex items-center justify-between text-left text-lg font-medium text-secondary dark:text-white w-full hover:text-primary"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h5>{faq.question}</h5>
                                {activeIndex === index ? <FaMinus className="  text-primary" /> : <FaPlus className=" text-secondary dark:text-white hover:text-primary" />}
                            </button>
                            <div
                                ref={(el) => (contentRefs.current[index] = el)}
                                className="transition-all duration-500 ease-in-out"
                                style={{ maxHeight: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px', opacity: activeIndex === index ? 1 : 0 }}
                            >
                                <p className=" text-base dark:text-gray-300 text-gray-900 font-normal leading-6">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
