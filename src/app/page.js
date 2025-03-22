import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Box from "@/components/ui/Box";
import Card from "@/components/ui/Card";
import CTA from "@/components/ui/CTA";
import Features from "@/components/ui/Features";
import SideCard from "@/components/ui/SideCard";
import FormComponent from "@/components/layout/FormComponent";
import Image from "next/image";
import React from "react";
import { services ,aboutData ,SubServices ,ctaData ,cardData} from "@/content/Home";

export default function Home() {
  return (
    <div className="bg-white dark:bg-secondary">
      <Hero />
      <About data={aboutData} />
      <div className=" py-14">
        <h3 className="text-4xl font-bold dark:text-primary text-secondary text-center mb-10">
          Expert-Led Financial Services
        </h3>
        <Card cardData={SubServices} btn hover/>
      </div>
      <div className=" flex flex-col-reverse lg:flex-row px-4 lg:px-24 bg-primarybg items-center space-x-2">
        <div className="h-full flex  items-center">
          <Image
            className="mt-20"
            width={1400}
            height={1400}
            src="/images/home/dashboard.webp"
          />
        </div>
        <div className="flex flex-col w-full pt-12 lg:pt-0 items-center">
          <h3 className="text-4xl font-bold dark:text-primary text-secondary text-center">
            Our Services
          </h3>
          <Box  data={services}/>
        </div> 
      </div>
      <div className=" lg:p-28 p-4">
        <CTA {...ctaData} />
      </div>
      <div>
        <div className=" bg-primarybg px-4 pt-4 lg:pt-20 lg:px-24 relative ">
          <div className="bg-white dark:bg-secondary px-2 z-10 py-4  lg:p-14 rounded-lg shadow2xl">
            <h3 className="lg:text-4xl text-xl font-bold dark:text-primary text-secondary text-center mb-4 lg:mb-10">
              Empowering Businesses through transaction support and improvising
              outcomes.
            </h3>
            <SideCard cardData={cardData} />
          </div>
        </div>
        <div className="w-full bg-primary h-40 -mt-28 lg:-mt-16"></div>
      </div>
      <div className=" py-14 bg-primarybg">
        <h3 className="text-4xl font-bold dark:text-primary text-secondary text-center mb-10">
        Corporate Entities
        </h3>
        <Features/>
      </div>
      <FormComponent/>
    </div>
  );
}
