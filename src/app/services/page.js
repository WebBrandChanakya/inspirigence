import FormComponent from "@/components/layout/FormComponent";
import Card from "@/components/ui/Card";
import CTA from "@/components/ui/CTA";
import PageBanner from "@/components/ui/PageBanner";
import React from "react";
import { ctaData, cardData } from "@/content/Services";

const page = () => {
  return (
    <div className="bg-white dark:bg-secondary">
      <PageBanner data={"Services"} />
      <div className=" py-14 max-w-7xl m-auto ">
        <h3 className="text-4xl font-bold dark:text-primary text-secondary text-center mb-10"></h3>
        <Card cardData={cardData} btn hover />
      </div>
      <div className="p-28 bg-primarybg">
        <CTA {...ctaData} />
      </div>
      <FormComponent />
    </div>
  );
};

export default page;
