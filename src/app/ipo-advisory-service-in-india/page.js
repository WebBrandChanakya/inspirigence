import About from "@/components/home/About";
import PageBanner from "@/components/ui/PageBanner";
import React from "react";
import {
  Data,
  Why,
  Services,
  faqs,
  Advantages,
  ipoData,
  How,
} from "@/content/IPOAdvisory";
import Card from "@/components/ui/Card";
import FormComponent from "@/components/layout/FormComponent";
import InfoBoxes from "@/components/services/InfoBoxes";
import IPOConsulting from "@/components/services/IPOConsulting";
import CTA from "@/components/ui/CTA";
import FAQ from "@/components/ui/FAQ";
import MAConsulting from "@/components/services/MAConsulting";
import IPOLaunch from "@/components/services/IPOLaunch";
import Link from "next/link";
export const ctaData = {
  title: "Partner With Inspirigence Advisors For A Successful IPO Launch",
  description:"Our expert team provides end-to-end support, ensuring a smooth and successful transition to the public markets. With a proven track record of helping businesses maximize valuation and attract the right investors, we are your trusted partner for IPO success.",
  subtext:" Partner with Inspirigence Advisors today and take your company to new heights!",
  buttonText: "Get A Free Consultation",
  buttonLink: "#quote",
  imageSrc: "/images/services/cta.jpg",
};
const data = [
  {
    title: "Disclosures",
    content: [
      `“The Company has not been submitted to the 
        <Link href="https://en.wikipedia.org/wiki/Board_for_Industrial_and_Financial_Reconstruction" class=" font-semibold hover:underline">
          Board of Industrial and Financial Reconstruction (BIFR)
        </Link>.”
        It is permissible for a corporation to be out of BIFR.`,
      "No winding-up petition has been allowed by the court against the firm, and no liquidator has been appointed.",
    ],
  },
  {
    title: "Requirements",
    content: [
      "A website is required for all businesses.",
      "The business must support demat securities trading and engage in an arrangement with both depositories.",
      "There should be no change in the owners of the firm within one year of filing the application to BSE for registration under the SME sector.",
      `<strong>Also Read – </strong>
        <Link href="/how-to-determine-if-your-business-is-ready-to-launch-an-ipo/" class=" font-semibold hover:underline">
          How to determine if your business is ready to launch an IPO?
        </Link>`,
    ],
  },
];
const info = [
  {
    title: "IPO Dimensions",
    content: [
      "In recent decades, the amount of SME IPOs have ranged from Rs 1.50 Cr to Rs 40.00 Cr. More than 200 businesses have gone public on SME exchanges. Mainboard IPOs are typically on the upper end of the spectrum. So take advantage of this and consult the Best IPO consulting firm in India.",
    ],
  },
  {
    title: "Suitable",
    content: [
      "SME IPOs are appropriate for companies with limited turnover and capitalization but the rapid pace of technological expansion in the near future. Among them are upcoming firms, startups, e-commerce, tech firms, infrastructure, programmers, and agro-focused businesses.",
    ],
  },
];

const page = () => {
  return (
    <div className="bg-white dark:bg-darkLvl1">
      <PageBanner data={"Best IPO Advisory Service in India"} />
      <About data={Data} />
      <div className="max-w-7xl mx-auto py-12">
        <IPOLaunch dark ipoData={ipoData} />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className=" pt-18 ">
          <h3 className="text-4xl py-6 font-bold dark:text-white text-secondary text-center ">
            Why Choose Inspirigence Advisors For IPO Consultation in India
          </h3>
          <p className="px-6 text-center dark:text-white text-black mb-10 ">
            Inspirigence Advisors distinguishes itself in the With a team of
            experts, Inspirigence is a one-stop solution for all your financial
            advice requirements. Our firm’s track record of unwavering success
            presents compelling reasons to select us as your trusted consultant
            for fostering substantial growth.
          </p>

          <h5 className="text-xl font-bold dark:text-gray-100 text-secondary text-center mb-10">
            Here are several key factors highlighting why Inspirigence is the
            optimal choice for your consultancy needs –
          </h5>
        </div>
        <Card hover cardData={Why} />
      </div>

      <div className="py-14  bg-primary dark:bg-darkLvl2">
        <div className="max-w-7xl mx-auto">

        <h3 className="text-4xl font-bold text-white text-center mb-10">
          About Initial Public Offerings (IPO)
        </h3>

        <InfoBoxes data={info} />
        </div>
      </div>
      <MAConsulting
        heading={"The Advantages of Having Your Company Listed on Exchanges"}
        services={Advantages}
      />
      <div className="bg-primarybg">
        <div className=" max-w-7xl mx-auto  pt-4 lg:pt-20  relative ">
          <div className="bg-white dark:bg-darkLvl1 px-8 z-10 py-4  lg:py-14 rounded-lg shadow2xl">
            <h3 className="lg:text-4xl text-xl font-bold dark:text-white text-secondary text-center mb-4 lg:mb-10">
              IPO Advisory Services Which Comprise The Following:
            </h3>
            <Card cardData={Services} />
          </div>
        </div>
        <div className="w-full bg-primary h-40 -mt-28 lg:-mt-16"></div>
      </div>
      <div className="py-14  bg-primarybg">
        <div className="max-w-7xl mx-auto">

        <InfoBoxes data={data} />
        </div>
      </div>
      <div className="py-14  bg-secondary dark:bg-darkLvl2">
        <div className="max-w-7xl mx-auto">

        
        <h3 className="text-2xl font-bold text-white text-center mb-10">
          Tax Advantages of Stock Market Listing
        </h3>

        <p className="px-6 text-lg text-gray-200  mb-10 ">
          Short-term sales of unlisted shares are subject to capital gains tax
          of up to 30 percent as applicable to the taxpayer, as well as
          long-term capital gains tax of 10 percent without indexation and 20
          percent with indexation. To understand more about the technicalities
          of tax benefits in IPO, one must consider taking Best IPO Advisory
          service in India. Short-term capital gains on listed securities are
          taxed at 15%, however, there is no long-term capital gains tax if the
          assets have been entitled to Share Securities Transaction Tax. This
          clearly shows that listing shares are a very appealing alternative for
          SMEs.
        </p>
        </div>
      </div>
      <div className="py-14 max-w-7xl mx-auto ">
        <IPOConsulting
          services={How}
          heading={
            "How our best IPO consulting services in India may assist you with IPO listing:"
          }
        />
      </div>
      <div className=" max-w-7xl mx-auto py-20">
        <CTA {...ctaData} />
      </div>
      <FAQ faqs={faqs} />
      <FormComponent />
    </div>
  );
};

export default page;
