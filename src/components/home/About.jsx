import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = ({ data }) => {
  return (
    <section className="bg-primarybg">
      <div className="py-10 overflow-hidden m-5 lg:m-0 2xl:py-16 xl:py-8 h-full">
        <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col-reverse lg:flex-row space-x-4 justify-between">
            {/* Left Content */}
            <div className="lg:w-1/2 flex flex-col justify-between">
              {data.companyName&&<h1 className="py-8 text-center text-gray-900 dark:text-gray-50 font-bold font-manrope text-xl lg:text-5xl lg:text-left lg:leading-[70px]">
                Overview of{" "}
                <span className="text-primary">{data.companyName}</span>
              </h1>}
              {data.heading&&<h1 className="py-8 text-center text-gray-900 dark:text-gray-50 font-bold font-manrope text-xl lg:text-5xl lg:text-left lg:leading-[70px]">
               {data.heading}
              </h1>}
              <p className="text-gray-0 text-center dark:text-white text-black lg:text-left">{data.description1}</p>
              <p className="text-gray-0 text-center dark:text-white text-black lg:text-left">{data.description2}</p>
              <div className="  lg:w-1/4 flex items-center hover:scale-95 transition-all duration-100 transform">
                {data.contactLink&&<Link href={data.contactLink} className="bg-primary m-auto lg:m-0 p-5 py-4 text-white rounded-xl block">
                  Contact us
                </Link>}
              </div>

            </div>

            {/* Right Image */}
            <div className="lg:w-1/2">
              <Image
                height={350}
                width={600}
                src={data.imageSrc}
                alt="About Us Image"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
