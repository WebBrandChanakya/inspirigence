import PageBanner from "@/components/ui/PageBanner";
import React from "react";
import { Data,Functions,Makes } from "@/content/PrivateEquity";
import About from "@/components/home/About";
import MAConsulting from "@/components/services/MAConsulting";
import Card from "@/components/ui/Card";
import FormComponent from "@/components/layout/FormComponent";
import WhatWeDo from "@/components/services/WhatWeDo";
const page = () => {
  return (
    <div className="bg-white dark:bg-secondary">
      <PageBanner data={"Private Equity Consulting"} />
      <About data={Data} />
      <div className="py-14 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold dark:text-primary text-secondary text-center mb-10">
        Private Equity Funds: What are They?
        </h3>
        <p className="px-6 text-center dark:text-white text-black lg:text-left">
        A private equity fund, commonly known as private equity, is a type of collective investment plan that entails investors making direct investments in privately held businesses. Typically, a limited liability company or firm will oversee the management of a private equity fund. The investment horizon with these funds can be extended annually and can vary from 5 to 10 years.<br/>The fact that private equity funds are not traded on the stock exchange is one of their distinguishing characteristics. Moreover, not everyone has access to these capitals. only, investment banks and <a href="https://en.wikipedia.org/wiki/High-net-worth_individual"> High Networth Individuals </a> (HNIs) make up the majority of institutional investors from whom money is often raised. A team that is professionally managed raises money and puts it to use by investing in other privately held businesses, raising capital, and financing new ventures and acquisitions.
        </p>
      </div>
      <MAConsulting heading={"Functions of Private Equity Consulting Firms"} services={Functions} para={"Following are some of the most typical uses:"}/>
      <div  className="bg-secondary">
      <div className="py-14 max-w-7xl mx-auto ">
          <h3 className="text-2xl font-bold text-white text-center mb-10">
          Why Choose Inspirigence?
          </h3>

          <p className="px-6 text-lg text-gray-200  mb-10 ">
          As one of the top private equity consulting firms in India, for appropriate projects, we are quite active in placing private equity capital, long-term debt, and preference share capital. By allocating equity to private investors for a three- to five-year term, promoter funds are raised. Depending on the company’s financial stability, either a premium or no premium is included in the placement. It is also possible to structure the contract such that the promoters have the opportunity to exercise their right of first refusal and purchase the stock at the end of a defined time. We use our extensive experience in business consulting to offer private equity and venture capital companies advice on possible acquisitions and investments.
          </p>
          <p className="px-6 text-lg text-gray-200  mb-10 ">
          We assist private equityand venture capital investors in locating, evaluating, and screening possible investments in cutting-edge, fast-growing businesses. Additionally, in order to boost growth and optimise returns on investors’ investments, as one of the prominent Private Equity consulting firms, we provide our portfolio firms beneficial strategic consulting services.
          </p>
      </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="  ">
          <h3 className="text-4xl my-12 font-bold dark:text-primary text-secondary text-center ">
          What makes us The Best Private Equity Consulting Firm in India?
          </h3>
        </div>
        <Card hover cardData={Makes} />
      </div>
      <div className="max-w-7xl mx-auto mb-10">

      <WhatWeDo/>
      </div>
      <FormComponent/>
    </div>
  );
};

export default page;
