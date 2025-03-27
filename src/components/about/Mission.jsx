import Image from 'next/image'
import React from 'react'

const Mission = () => {
  return (
    <section className="py-24 relative bg-primarybg">
  <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
      <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
        <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
          <Image
          width={500}
          height={500}
            className=" rounded-xl object-cover aspect-square"
            src="/images/about/mission.jpg"
            alt="about Us image"
          />
        </div>
        <Image
          width={500}
          height={500}
            className=" rounded-xl object-cover"
            src="/images/about/graph.jpg"
            alt="about Us image"
          />
      </div>
      <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
        <div className="w-full flex-col justify-center items-start gap-8 flex">
          <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex px-16">
            <h3 className="text-primary  text-2xl font-bold font-manrope leading-normal lg:text-start text-center">
            Our Mission
            </h3>
            <h2 className="text-secondary dark:text-white  text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
            Helping our clients identify their business and financial needs
            </h2>
            <p className="text-gray-500 dark:text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
            Our team includes experienced and skilled accountants, Company Secretaries, Lawyers, and finance professionals.
            </p>
          </div>
          {/* <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
            <div className="flex-col justify-start items-start inline-flex">
              <h3 className="text-primary  text-4xl font-bold font-manrope leading-normal">
                33+
              </h3>
              <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                Years of Experience
              </h6>
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <h4 className="text-primary  text-4xl font-bold font-manrope leading-normal">
                125+
              </h4>
              <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                Successful Projects
              </h6>
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <h4 className="text-primary  text-4xl font-bold font-manrope leading-normal">
                52+
              </h4>
              <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                Happy Clients
              </h6>
            </div>
          </div> */}
        </div>
        
      </div>
    </div>
  </div>
</section>

  )
}

export default Mission