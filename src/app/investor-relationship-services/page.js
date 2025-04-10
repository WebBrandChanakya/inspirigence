import FormComponent from "@/components/layout/FormComponent";
import PageBanner from "@/components/ui/PageBanner";
import SideCard from "@/components/ui/SideCard";
import React from "react";
export const cardData = [
  "Maintenance of Client database and assigning the codes as per the account opening form",
  "Maintain complete set of documents for the clients",
  "Account activation and send welcome letter to the clients",
  "Recording of Initial corpus (Stock/Fund)",
  "Helpdesk for payroll related compliances",
  "Filing statutory returns as per the timelines",
  "Transfer-out, transfer-in, and settlement of EPF accounts",
  "Process subscription/redemption/switch requestion",
];
const page = () => {
  return (
    <div className="bg-white dark:bg-darkLvl1">
      <PageBanner data={"Investor Relationship Services"} />
      <div className="py-14 max-w-7xl mx-auto ">
        <p className="px-6 text-center dark:text-white text-black lg:text-left">
          Investor relationship services are primarily a combination of finance,
          communication, and marketing to manage the flow of information between
          a company, its investors, and its stakeholders. Investors play a major
          role in the success and growth of a company. It’s important for
          companies to maintain strong, transparent relationships with
          investors.
        </p>
      </div>
      <div className="px-24 bg-primarybg py-14">
        <div className="max-w-7xl mx-auto">

      <SideCard cardData={cardData} />
        </div>
      </div>
      <FormComponent />
    </div>
  );
};

export default page;
