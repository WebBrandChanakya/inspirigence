import About from "@/components/home/About";
import FormComponent from "@/components/layout/FormComponent";
import Box from "@/components/ui/Box";
import Image from "next/image";
import React from "react";
import { values } from "@/content/About";
import PageBanner from "@/components/ui/PageBanner";
import Team from "@/components/about/Team";
import Mission from "@/components/about/Mission";

const page = () => {
  return (
    <div className="bg-white dark:bg-secondary">
      <PageBanner data={"About Us"} />
      <Mission />
      <div className=" flex max-w-7xl mx-auto py-16  items-center space-x-8">
        <div className="w-1/2 h-full flex  items-center">
          <Image
            className="mt-20 rounded"
            width={500}
            height={500}
            src="/images/about/values.jpg"
          />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-bold dark:text-primary text-secondary text-center">
            Our Values
          </h3>
          <Box data={values}  size/>
        </div>
      </div>
      <Team />

      <FormComponent />
    </div>
  );
};

export default page;

export const metadata = {
  title: 'About Us - Inspirigence Advisors',
  description: 'We help our clients identify their business and financial needs Our team includes experienced and skilled accountants, Company Secretaries, Lawyers, and finance professionals.    Our Values  Customer first   Passion   Integrity   Excellence Meet the Team CA',
}