import About from "@/components/home/About";
import FormComponent from "@/components/layout/FormComponent";
import AdministrationServices from "@/components/services/AdministrationServices";
import AdvisorsComponent from "@/components/services/AdvisorsComponent";
import IPOLaunch from "@/components/services/IPOLaunch";
import Card from "@/components/ui/Card";
import FAQ from "@/components/ui/FAQ";
import PageBanner from "@/components/ui/PageBanner";
import TabView from "@/components/ui/TabView";
import {
  Data,
  Understanding,
  tabs,
  Features,
  Potential ,
  faqs,

} from "@/content/AlternativeInvestment";
import React from "react";

const page = () => {
  return (
    <div className="bg-white dark:bg-darkLvl1">
      <PageBanner data={"Best Alternative Fund Advisors in India (AIF)"} />
      <About data={Data} />
      <div className="max-w-7xl mx-auto py-12">
        <IPOLaunch ipoData={Understanding} />
      </div>
      <div className=" py-14 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold dark:text-white text-secondary text-center mb-10">
          Key Features of AIFs
        </h3>
        <Card cardData={Features} />
      </div>
      <TabView tabs={tabs} heading={"Different Types Of AIF’s Available"} />
      <div className="bg-primarybg">
        <div className="  max-w-7xl mx-auto pt-4 lg:pt-20  relative ">
          <div className="bg-white dark:bg-darkLvl1  z-10 py-4  lg:py-14 px-14 rounded-lg shadow2xl">
            <h3 className="lg:text-4xl text-xl font-bold dark:text-white text-secondary text-center mb-4 lg:mb-10">
            Potential Benefits of AIFs
            </h3>
            <Card cardData={Potential } />
          </div>
        </div>
        <div className="w-full bg-primary h-40 -mt-28 lg:-mt-16"></div>
      </div>
     
      <AdvisorsComponent/>
      <AdministrationServices/>
      <FAQ faqs={faqs}/>
      <FormComponent/>
    </div>
  );
};

export default page;
