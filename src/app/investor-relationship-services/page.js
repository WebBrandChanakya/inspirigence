import FormComponent from '@/components/layout/FormComponent';
import PageBanner from '@/components/ui/PageBanner'
import SideCard from '@/components/ui/SideCard'
import React from 'react'
export const cardData = [
    "Smooth integration and reduced risks",
    "Planning the information structure",
    "Designing various MIS",
  ];
const page = () => {
  return (
    <div className='bg-white dark:bg-secondary'>
        <PageBanner data={"Investor Relationship Services"} />
        <div className="py-14 px-28">
        
        <p className="px-6 text-center dark:text-white text-black lg:text-left">
        Investor relationship services are primarily a combination of finance, communication, and marketing to manage the flow of information between a company, its investors, and its stakeholders. Investors play a major role in the success and growth of a company. It’s important for companies to maintain strong, transparent relationships with investors.
        </p>
      </div>
      <SideCard cardData={cardData}/>
      <FormComponent/>
    </div>
  )
}

export default page