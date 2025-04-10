import About from "@/components/home/About";
import FormComponent from "@/components/layout/FormComponent";
import MAConsulting from "@/components/services/MAConsulting";
import Card from "@/components/ui/Card";
import FAQ from "@/components/ui/FAQ";
import PageBanner from "@/components/ui/PageBanner";
import SideCard from "@/components/ui/SideCard";
import { Data, Why, Approach, cardData, faqs, Type } from "@/content/PMS";
import React from "react";

const page = () => {
  return (
    <div className="bg-white dark:bg-darkLvl1">
      <PageBanner data={"Portfolio Management Service"} />
      <About data={Data} />
      <div className=" py-14 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold dark:text-white text-secondary text-center mb-10">
          Why Choose Our Portfolio Management Services
        </h3>
        <Card cardData={Why} hover />
      
      </div>
      <MAConsulting
          heading={"Our Approach to Portfolio Management"}
          services={Approach}
        />
      <div className="bg-primarybg">
        <div className="  max-w-7xl mx-auto  pt-4 lg:pt-20  relative ">
          <div className="bg-white dark:bg-darkLvl2 px-2 z-10 py-4  lg:p-14 rounded-lg shadow2xl">
            <h3 className="lg:text-4xl text-xl font-bold dark:text-white text-secondary text-center mb-4 lg:mb-10">
              Who Can Benefit from Our Portfolio Management Services
            </h3>
            <SideCard cardData={cardData} />
          </div>
        </div>
        <div className="w-full bg-primary h-40 -mt-28 lg:-mt-16"></div>
      </div>
      <div className=" py-14 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold dark:text-white text-secondary text-center mb-10">
        Types of Portfolio Management Services We Offer
        </h3>
        <Card cardData={Type}  />
      
      </div>
      <FAQ faqs={faqs} />
      <FormComponent />
    </div>
  );
};

export default page;
