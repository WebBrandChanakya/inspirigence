import About from "@/components/home/About";
import PageBanner from "@/components/ui/PageBanner";
import React from "react";
import { Data, Choose, services, faqs, tabs } from "@/content/M&A";
import FormComponent from "@/components/layout/FormComponent";
import MAConsulting from "@/components/services/MAConsulting";
import Card from "@/components/ui/Card";
import FAQ from "@/components/ui/FAQ";
import TabView from "@/components/ui/TabView";

const page = () => {
  return (
    <div className="bg-white dark:bg-secondary">
      <PageBanner data="Merger and Acquisition Consultant" />
      <About data={Data} />
      <div className="py-14 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold dark:text-primary text-secondary text-center mb-10">
          Inspirigence – The Best Merger and Acquisition Consulting Firm in
          India
        </h3>
        <p className="px-6 text-center dark:text-white text-black lg:text-left">
          Inspirigence Advisors distinguishes itself in the realm of Merger and
          Acquisition consulting firms in India through its impressive track
          record, client-focused approach, and extensive industry expertise. Our
          team of skilled merger and acquisition consultants brings a wealth of
          experience to each project, delivering customized solutions that
          precisely address our client’s specific requirements. We are committed
          to thoroughly understanding our client’s business goals and providing
          strategic counsel aligned with their long-term vision. Choosing
          Inspirigence Advisors as your Merger and Acquisition Consultant in
          India means partnering with experts dedicated to optimizing value and
          mitigating risks throughout the entire transaction lifecycle.
        </p>
      </div>
      <MAConsulting
        services={services}
        heading={"Our Merger and Acquisition Consultant Services"}
      />
      <TabView
        tabs={tabs}
        heading={"Merger and Acquisition Advisory Process"}
      />
      <div className="py-12 bg-primarybg">
        <div className="max-w-7xl mx-auto">
          <div className=" ">
            <h3 className="text-4xl font-bold dark:text-primary text-secondary mb-10 text-center ">
              Choose Inspirigence As Your Merger and Acquisition Consultant
            </h3>
          </div>
          <Card cardData={Choose} />
        </div>
      </div>
      <FAQ faqs={faqs} />
      <FormComponent />
    </div>
  );
};

export default page;
