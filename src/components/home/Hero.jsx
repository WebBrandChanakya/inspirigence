import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ContactBtn from '../ui/ContactBtn'

const Hero = () => {
    return (
        <section className="h-full">
            <div className=" py-1 overflow-hidden lg:m-0 ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col lg:flex-row space-x-10">
                        <div className="w-full lg:w-1/2">

                            <h1 className="lg:py-8 text-xl text-center text-gray-900 dark:text-gray-50 font-bold font-manrope  lg:text-5xl lg:text-left lg:leading-[70px]">
                                We care for your transactions at {" "}
                                <span className="text-primary dark:text-white">Inspirigence</span>
                            </h1>
                            <p className=" text-gray-0 dark:text-white text-black lg:text-lg text-center lg:text-left">
                                Inspirigence Advisors is a leading financial service provider in India, offering expert solutions for IPO Advisory, Merger and Acquisition, Distress Asset Resolution, Fund accounting and Fund Administration, Compliances and more.
                            </p>
                            <div className="relative my-10  flex  items-center  justify-between  ">
                                <ContactBtn />
                            </div>

                        </div>
                        <div className="lg:w-1/2 pt-24" >
                            <div className="w-full h-full sm:w-auto ">
                                <div className=' [border-radius:28%_82%_97%_22%_/_20%_47%_69%_100%] ml-auto relative w-3/4 h-full bg-gradient-to-bl from-white via-min to-min  shadow-xl '>
                                    <Image
                                        height={600}
                                        width={500}
                                        src="/images/home/inspirigence-person.png"
                                        alt="Dashboard image"
                                        className="absolute  bottom-[-22px] right-[-41px] z-10"
                                    />
                                    {/* <Image
                                        height={1000}
                                        width={1000}
                                        src="/images/home/1.png"
                                        alt="Dashboard image"
                                        className="absolute animate scale-125  -top-10 z-0"
                                    /> */}
                                    {/* <Image
                                        height={100}
                                        width={100}
                                        src="/images/home/2.png"
                                        alt="Dashboard image"
                                        className="absolute animate-float-50 -left-24 bottom-0"
                                    /> */}
                                </div>
                                {/* <img
                    src="https://pagedone.io/asset/uploads/1694846193.png"
                    alt="Dashboard image"
                    className="rounded-l-3xl object-cover"
                  /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero