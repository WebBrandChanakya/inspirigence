import FormComponent from "@/components/layout/FormComponent";
import PageBanner from "@/components/ui/PageBanner";
import React from "react";
import { FaExchangeAlt } from "react-icons/fa";
const services = [
  {
    title: "Back Office Services",
    items: [
      "Review/Maintenance of client-level expenses and reconciliation.",
      "Pool account transactions with the bank.",
      "Account opening for the clients.",
      "Client-level bank reconciliation.",
      "Position reconciliation.",
    ],
  },
  {
    title: "Middle Office Operations",
    items: [
      "Trade Allocation and confirmation.",
      "Repo Processing & Reporting.",
      "Monitor Trade Settlement.",
      "Trade reconciliation.",
      "Portfolio Valuation.",
    ],
  },
];

const page = () => {
  return (
    <div className="bg-white dark:bg-secondary">
      <PageBanner data={"Back Office & Middle Office Services"} />
      <div className="py-14 px-28">
        <p className="px-6 text-center dark:text-white text-black lg:text-left">
          Organizations need to stay focused on the company’s goals, growth, and
          core strengths. Inspirigence provides cost-effective back office and
          middle office services to free up your business capacity so you can
          focus on the big picture. We recruit, hire, train and retain top
          talent that allows you to easily scale up or down to meet seasonal or
          market demands. By outsourcing your back office and middle office
          processes to Inspirigence, you can reduce costs and increase
          productivity, accuracy, and predictability in your processes.
        </p>
      </div>
      <div className="bg-primarybg text-gray-900 py-12 px-28">
        <div className="grid md:grid-cols-2 gap-10 px-4">
          {services.map((service, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold flex dark:text-white items-center gap-2">
                <FaExchangeAlt className="text-green-500 text-2xl" />
                {service.title}
              </h2>
              <ul className="mt-3 space-y-2 text-lg text-gray-700 dark:text-gray-300">
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <FormComponent />
    </div>
  );
};

export default page;
