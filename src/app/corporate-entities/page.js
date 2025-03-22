import FormComponent from "@/components/layout/FormComponent";
import Features from "@/components/ui/Features";
import IconBox from "@/components/ui/IconBox";
import PageBanner from "@/components/ui/PageBanner";
import React from "react";

const page = () => {
  return (
    <div className="bg-white dark:bg-secondary">
      <PageBanner data={"Corporate Entities"} />

      <div className=" py-14 bg-primarybg">
        <Features />
      </div>
      <div className=" py-14 px-28 ">
        <h3 className="text-4xl font-bold dark:text-primary text-secondary text-center mb-10">
          Exceptional Accounting Resources
        </h3>

        <IconBox />
      </div>
      <FormComponent />
    </div>
  );
};

export default page;
