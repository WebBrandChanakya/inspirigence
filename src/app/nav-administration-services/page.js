import About from "@/components/home/About";
import FormComponent from "@/components/layout/FormComponent";
import PageBanner from "@/components/ui/PageBanner";
import React from "react";
import { Data, points } from "@/content/NAV";
const page = () => {
  return (
    <div className="bg-white dark:bg-secondary">
      <PageBanner data={"Fund Administration Services"} />
      <About data={Data} />
      <div className="bg-secondary">
      <div className=" text-white py-12 max-w-7xl mx-auto border-b">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Why Choose Our NAV Administration Service
        </h2>
        <ul className="space-y-4 px-10">
          {points.map((point, index) => (
            <li key={index} className="text-lg">
              <span className="font-bold">{point.title}:</span>{" "}
              {point.description}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-lg  px-10">
          Partner with Inspirigence Advisors and experience the difference that
          professional and precise NAV administration can make for your
          investment funds. Contact us today to learn more about how we can
          support your financial operations.
        </p>
      </div>
      </div>
      <FormComponent />
    </div>
  );
};

export default page;
