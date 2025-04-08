import FormComponent from '@/components/layout/FormComponent'
import Card from '@/components/ui/Card'
import PageBanner from '@/components/ui/PageBanner'
import { SubServices } from '@/content/CapitalMarket'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white dark:bg-secondary'>
        <PageBanner data={"Capital Market"}/>
        <div className=" py-14 max-w-7xl mx-auto">
        <Card cardData={SubServices} btn hover/>
      </div>
      <FormComponent/>
    </div>
  )
}

export default page