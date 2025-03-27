import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactBtn from "../ui/ContactBtn";

const About = ({ data }) => {
  return (
    <section className="bg-primarybg">
      <div className="py-10 overflow-hidden m-5 lg:m-0 2xl:py-16 xl:py-8 h-full">
        <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col-reverse lg:flex-row space-x-4 justify-between">
            {/* Left Content */}
            <div className="lg:w-1/2 flex flex-col space-y-4">
              {data.companyName&&<h2 className=" text-center text-gray-900 dark:text-gray-50 font-bold font-manrope text-xl lg:text-5xl lg:text-left lg:leading-[70px]">
                Overview of{" "}
                <span className="text-primary">{data.companyName}</span>
              </h2>}
              {data.heading&&<h2 className="py-4 text-center text-gray-900 dark:text-gray-50 font-bold font-manrope text-xl lg:text-5xl lg:text-left ">
               {data.heading}
              </h2>}
              <p className="text-gray-0 text-center dark:text-white text-black lg:text-left">{data.description1}</p>
              <p className="text-gray-0 text-center dark:text-white text-black lg:text-left">{data.description2}</p>
              <div className="   flex items-center">
                {data.contactLink&& <ContactBtn/>}
              </div>

            </div>

            {/* Right Image */}
            <div className="lg:w-1/2">
              <Image
                height={300}
                width={500}
                src={data.imageSrc}
                alt="About Us Image"
                className="rounded-xl ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
