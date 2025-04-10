import FormComponent from "@/components/layout/FormComponent";
import Card from "@/components/ui/Card";
import CTA from "@/components/ui/CTA";
import PageBanner from "@/components/ui/PageBanner";
import SideCard from "@/components/ui/SideCard";
import React from "react";
import { SubServices ,ctaData ,cardData, Top} from "@/content/Resource";


const page = () => {

  return (
    <div className="bg-white dark:bg-darkLvl1">
      <PageBanner data={"Resources"} />
      <div className=" py-14  max-w-7xl mx-auto">
        <Card cardData={Top} hover />
      </div>
      <div className="bg-primarybg">
        <div className=" pt-20  max-w-7xl mx-auto relative">
          <div className="bg-white dark:bg-darkLvl2 p-14 rounded-lg shadow-2xl">
            <h3 className="text-4xl font-bold dark:text-white text-secondary text-center mb-10">
              We deliver expertise you can trust
            </h3>
            <SideCard cardData={cardData} />
          </div>
        </div>
        <div className="w-full bg-primary h-40 -mt-16"></div>
      </div>
      <div className=" py-14  max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold dark:text-white text-secondary text-center mb-10">
          We bring you the best possible solutions for your business
        </h3>
        <Card cardData={SubServices} btn/>
      </div>
      <div className="py-20  max-w-7xl mx-auto ">
        <CTA {...ctaData} />
      </div>
      <FormComponent />
    </div>
  );
};

export default page;
