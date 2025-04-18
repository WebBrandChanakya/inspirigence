"use client"
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
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {
  services,
  aboutData,
  SubServices,
  ctaData,
  cardData,
} from "@/content/Home";

export default function Home() {
  return (
    <div className="bg-white dark:bg-darkLvl1 scroll-smooth">
      <Hero />
      <About data={aboutData} />
      <div className=" ">
        <div className=" flex py-12 flex-col-reverse lg:flex-row max-w-7xl mx-auto items-center space-x-2 ">
          <div className="h-full w-full flex  items-center">
            {/* <Image
              className="mt"
              width={1400}
              height={1400}
              src="/images/home/services.png"
            /> */}
         <DotLottieReact
          src="https://lottie.host/7f07fead-6453-4c1a-9c63-b7e652075d8e/nQaecpuNxf.lottie"
          loop
          autoplay
          className="w-full scale-150 mt-20"
        />
          </div>
          <div className="flex flex-col w-full pt-12 lg:pt-0 items-center">
            <h3 className="text-4xl font-bold dark:text-white text-primary text-center">
              Our Core Services
            </h3>
            <Box data={services}  />
          </div>
        </div>
      </div>
      <div className="bg-primarybg">

   
      <div className=" py-14 max-w-7xl mx-auto ">
        <h3 className="text-4xl   font-bold dark:text-white text-secondary text-center mb-10">
          Expert-Led Financial Services
        </h3>
        <Card cardData={SubServices} btn hover />
      </div>
      </div>
      <div className=" max-w-7xl mx-auto py-28">
        <CTA {...ctaData} other />
      </div>
      <div className="bg-primarybg">
        <div className="max-w-7xl mx-auto pt-4 lg:pt-20  relative ">
          <div className="bg-white dark:bg-darkLvl2 px-2 z-10 py-4  lg:p-8 rounded-lg shadow2xl">
            <h3 className="lg:text-4xl text-xl font-bold dark:text-white text-secondary text-center mb-4 lg:mb-10">
              Empowering Businesses through transaction support and improvising
              outcomes.
            </h3>
            <SideCard cardData={cardData} />
          </div>
        </div>
        <div className="w-full bg-primary h-40 -mt-28 lg:-mt-16"></div>
      </div>
      <div className="bg-primarybg">
      <div className=" py-14 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold dark:text-white text-secondary text-center mb-10">
          Corporate Entities
        </h3>
        <Features />
      </div>
      </div>
      <FormComponent />
    </div>
  );
}
