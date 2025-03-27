import Link from 'next/link';
import React from 'react';

const Card = ({ cardData, btn, hover }) => {
    return (
        <div className={`grid   ${cardData.length == 2 || cardData.length == 4 ?"lg:grid-cols-2" : "lg:grid-cols-3"} gap-4`}>
            {cardData.map((card, index) => (
                <div key={index} className="relative flex h-full w-full py-5 flex-col justify-center ">
                    <div
                        className={`${hover? 'group':""} h-full w-full relative cursor-pointer overflow-hidden bg-white dark:bg-primarybg px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto ${cardData.length == 2 || cardData.length == 4 ? "sm:max-w-lg" : "sm:max-w-sm"}  sm:rounded-lg sm:px-10 
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl `}
                    >
                        <span
                            className={`absolute top-10 z-0  h-20 w-20  rounded-full bg-primary 
                            ${hover ? "transition-all duration-500 group-hover:scale-[14]" : ""}`}
                        />
                        <div className="relative z-10 mx-auto max-w-md">
                            <span
                                className={`grid w-20 h-20 place-items-center rounded-full bg-primary 
                                ${hover ? "transition-all duration-300 group-hover:bg-primary" : ""}`}
                            >
                                {card.icon}
                            </span>
                            <div
                                className={`space-y-6 pt-5 text-base leading-7 text-secondary dark:text-gray-50 
                                ${hover ? "transition-all duration-300 group-hover:text-white/90" : ""}`}
                            >
                                {card.title && (
                                    card.link ? (
                                        <Link href={card.link}>
                                            <h4 className="font-bold text-secondary group-hover:text-white dark:text-white text-lg">
                                                {card.title}
                                            </h4>
                                        </Link>
                                    ) : (
                                        <h4 className="font-bold text-secondary group-hover:text-white dark:text-white text-lg">
                                            {card.title}
                                        </h4>
                                    )
                                )}
                                <p>{card.description}</p>
                            </div>
                            <div className="pt-5 text-base font-semibold leading-7">
                                {btn && (
                                    <p>
                                        <Link
                                            href={card.link}
                                            className={`text-primary ${hover ? "transition-all duration-300 group-hover:text-white" : ""}`}
                                        >
                                            Learn More →
                                        </Link>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Card;
