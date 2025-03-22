import React from 'react';

const Card = ({ cardData, btn, hover }) => {
    return (
        <div className={`grid px-4 lg:px-24 ${cardData.length==2 ? "lg:grid-cols-2":"lg:grid-cols-3"} gap-4`}>
            {cardData.map((card, index) => (
                <div key={index} className="relative flex h-full py-5 flex-col justify-center overflow-hidden">
                    <div 
                        className={`group h-full relative cursor-pointer overflow-hidden bg-white dark:bg-primarybg px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto ${cardData.length==2 ? "sm:max-w-lg":"sm:max-w-sm"}  sm:rounded-lg sm:px-10 
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl `}
                    >
                        <span 
                            className={`absolute top-10 z-0 h-20 ${cardData.length==2 ? "w-32 ":" w-20"}  rounded-full bg-primary 
                            ${hover ? "transition-all duration-300 group-hover:scale-[12]" : ""}`} 
                        />
                        <div className="relative z-10 mx-auto max-w-md">
                            <span 
                                className={`grid h-20 w-20 place-items-center rounded-full bg-primary 
                                ${hover ? "transition-all duration-300 group-hover:bg-primary" : ""}`}
                            >
                                {card.icon}
                            </span>
                            <div 
                                className={`space-y-6 pt-5 text-base leading-7 text-secondary dark:text-gray-50 
                                ${hover ? "transition-all duration-300 group-hover:text-white/90" : ""}`}
                            >
                                {card.title&&<h4 className='font-bold'>{card.title}</h4>}
                                <p>{card.description}</p>
                            </div>
                            <div className="pt-5 text-base font-semibold leading-7">
                               {btn && (
                                    <p>
                                        <a 
                                            href="#" 
                                            className={`text-primary ${hover ? "transition-all duration-300 group-hover:text-white" : ""}`}
                                        >
                                            Learn More →
                                        </a>
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
