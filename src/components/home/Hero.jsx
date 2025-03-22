import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className="h-full">
            <div className=" py-10 overflow-hidden lg:m-0 2xl:py-16 xl:py-8 ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row space-x-10">
                        <div className="w-full lg:w-1/2">

                            <h1 className="lg:py-8 text-xl text-center text-gray-900 dark:text-gray-50 font-bold font-manrope  lg:text-5xl lg:text-left lg:leading-[70px]">
                                We care for your transactions at {" "}
                                <span className="text-primary">Inspirigence</span>
                            </h1>
                            <p className=" text-gray-0 dark:text-white text-black lg:text-lg text-center lg:text-left">
                                Inspirigence Advisors is a leading financial service provider in India, offering expert solutions in fund accounting, administration, compliance, advisory, and more.
                            </p>
                            <div className="relative p-1.5 my-10  flex  items-center gap-y-4 h-auto md:h-16  md:flex-row justify-between rounded-full md:shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] border md:bg-white transition-all duration-0 border-primary focus-within:border-2">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Enter email to get started"
                                    className="text-base rounded-full text-gray-900 flex-1 py-4 px-6 shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] md:shadow-none bg-white md:bg-transparent shadow-none placeholder:text-gray-400 focus:outline-none md:w-fit w-full"
                                />
                                <button className="bg-primary rounded-full py-3 px-7 lg:text-base font-semibold text-white hover:bg-primary cursor-pointer transition-all duration-0 md:w-fit ">
                                    Get Started
                                </button>
                            </div>

                        </div>
                        <div className="lg:w-1/2">
                            <div className="w-full h-full sm:w-auto">
                                <div className='[border-radius:24%_76%_70%_30%_/_20%_33%_67%_80%] m-auto relative  w-3/4 h-3/4 bg-primary'>
                                    <Image
                                        height={400}
                                        width={400}
                                        src="/images/home/hero-img.png"
                                        alt="Dashboard image"
                                        className="absolute -right-24 -top-28"
                                    />
                                    <Image
                                        height={300}
                                        width={300}
                                        src="/images/home/hero.png"
                                        alt="Dashboard image"
                                        className="absolute -left-24 top-28"
                                    />
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