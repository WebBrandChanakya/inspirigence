import FormComponent from '@/components/layout/FormComponent'
import Card from '@/components/ui/Card'
import PageBanner from '@/components/ui/PageBanner'
import { SubServices } from '@/content/Investment'
import React from 'react'

const page = () => {
  
  return (
    <div className='bg-white dark:bg-darkLvl1'>
        <PageBanner data={"Investment Banking Advisors"}/>
        <div className=" py-14 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold dark:text-white text-secondary text-center mb-10">
          Our Investment Banking Advisors
        </h3>
        <Card cardData={SubServices} btn hover/>
      </div>
      <FormComponent/>
    </div>
  )
}

export default page