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
      <div className=" flex px-24  items-center space-x-2">
        <div className="w-1/2 h-full flex  items-center">
          <Image
            className="mt-20"
            width={700}
            height={700}
            src="/images/home/dashboard.webp"
          />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-bold dark:text-primary text-secondary text-center">
            Our Values
          </h3>
          <Box data={values} />
        </div>
      </div>
      <Team />

      <FormComponent />
    </div>
  );
};

export default page;
