import About from '@/components/home/About'
import PageBanner from '@/components/ui/PageBanner'
import React from 'react'
import { Data,cardData,faqs ,Diligence  ,Best,Stand,Corporate  } from '@/content/FinancialDue'
import FormComponent from '@/components/layout/FormComponent'
import FAQ from '@/components/ui/FAQ'
import SideCard from '@/components/ui/SideCard'
import MAConsulting from '@/components/services/MAConsulting'
import Card from '@/components/ui/Card'

const page = () => {
  return (
    <div className='bg-white dark:bg-secondary'>
        <PageBanner data={"Financial Due Diligence Services in India"}/>
        <About data={Data}/>
        <div className="py-14 px-28">
        <h3 className="text-4xl font-bold dark:text-primary text-secondary text-center mb-10">
        Understanding Financial Due Diligence in Business Transactions
        </h3>
        <p className="px-6 text-center dark:text-white text-black lg:text-left">
        Financial Due diligence is an impartial thorough research or assessment of the target organization / asset to understand the possible risks associated with a proposed deal. It entails assessing and examining the claims, risks, and advantages of a proposed transaction. This is accomplished by examining the origin, operation, and predicted future position of the organization or asset in question in relation to the proposed transaction.Although using due diligence services in India is not normally required by law, the premise is based on the simple concept of caveat emptor (let the buyer beware). While the investor is frequently protected by the claims and assurances made by the sellers / client at the time of deal consummation, the goal underlying due diligence is to protect the investment.
        </p>
      </div>
      <MAConsulting heading={"Inspirigence – The Best Financial Due Diligence Firm"} para={"The breadth of due diligence varies with the size and structure of the organization, whether you are trying to acquire a new company or selling a unit. Inspirigence, a one of the top financial due diligence firms in India, offers services by doing in-depth analysis and research of the company’s legal and financial situation. The following is a step-by-step guide to the due diligence process:"} services={Diligence }/>
      <About data={Best}/>
      <div className=" py-14 px-28 ">
        <h3 className="text-4xl font-bold dark:text-primary text-secondary text-center mb-10">
        What Makes Us Stand Out?
        </h3>
        <p className="px-6 text-center dark:text-white text-black mb-10">
        We are a team with extensive understanding of local and worldwide legislation, and we offer the most respected financial due diligence services in India. Services are supplied by qualified professionals at Inspirigence Advisors. In the organisation, we ensure a dependable and varied approach to due diligence evaluation. We offer legal and financial due diligence services such as asset appraisal, finance or accounting policy review, and financial forecast analysis. Contact us for unrivalled quality in services to help you make the correct option. Our areas of work are:
        </p>
        <Card cardData={Stand } />
      </div>
      <div>
        <div className=" bg-primarybg px-4 pt-4 lg:pt-20 lg:px-24 relative ">
          <div className="bg-white dark:bg-secondary px-2 z-10 py-4  lg:p-14 rounded-lg shadow2xl">
            <h3 className="lg:text-4xl text-xl font-bold dark:text-primary text-secondary text-center mb-4 lg:mb-10">
            Documents Required During Due Diligence Process
            </h3>
            <SideCard cardData={cardData} />
          </div>
        </div>
        <div className="w-full bg-primary h-40 -mt-28 lg:-mt-16"></div>
      </div>
      <About data={Corporate }/>
      <FAQ faqs={faqs}/>
      <FormComponent/>
    </div>
  )
}

export default page