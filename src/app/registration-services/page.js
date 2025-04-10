import FormComponent from "@/components/layout/FormComponent";
import PageBanner from "@/components/ui/PageBanner";
import SideCard from "@/components/ui/SideCard";
import React from "react";
export const cardData = [
  "Company Incorporation",
  "Portfolio Management Services",
  "Alternate Investment Funds",
  "Merchant Banking",
  "Mutual Funds",
  "Non Banking Financial Company (NBFC)",
  "GIFT City Registration",
  "Udyog Aadhaar Registration for MSMEs",
];

const page = () => {
  return (
    <div className="bg-white dark:bg-darkLvl1">
      <PageBanner data={"Registration Services"} />
      <div className="py-14  max-w-7xl mx-auto">
        <p className="px-6 text-center text-lg dark:text-white text-black lg:text-left">
          Capital Market entities are regulated by the regulators to safeguard
          the interest of investors. There are specific registration
          requirements from the regulators before the start of such businesses.
          We have got a specialized team having expertise in Company secretarial
          work and business registration with the various regulatory bodies like
          SEBI, RBI, etc.
        </p>
      </div>
      <div className=" py-14 bg-primarybg">
        <div className=" max-w-7xl mx-auto">

        <SideCard cardData={cardData} />
        </div>
      </div>
      <FormComponent />
    </div>
  );
};
export default page;
