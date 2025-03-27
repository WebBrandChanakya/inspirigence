import FormComponent from '@/components/layout/FormComponent'
import Card from '@/components/ui/Card'
import PageBanner from '@/components/ui/PageBanner'
import { SubServices } from '@/content/Compliance'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white dark:bg-secondary'>
        <PageBanner data={"Compliance"}/>
        <div className=" py-14 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold dark:text-primary text-secondary text-center mb-10">
            Our Compliance
        </h3>
        <Card cardData={SubServices} btn hover/>
      </div>
      <FormComponent/>
    </div>
  )
}

export default page