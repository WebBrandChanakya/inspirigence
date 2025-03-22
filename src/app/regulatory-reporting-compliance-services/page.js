import FormComponent from '@/components/layout/FormComponent'
import PageBanner from '@/components/ui/PageBanner'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white dark:bg-secondary'>
        <PageBanner data={"Regulatory reporting & Compliance Services"}/>
        <div className="py-14 px-28">
        <h3 className="text-4xl font-bold dark:text-primary text-secondary text-center mb-10">
        Why is Regulatory Compliance Important?
        </h3>
        <p className="px-6 text-center dark:text-white text-black lg:text-left">
        Since the turn of the century, there have been more rules, and regulatory compliance management has grown in importance in many different enterprises. Corporate, chief, and regulatory compliance officers, as well as compliance manager jobs, have been created as a result of the development. Hiring personnel whose sole responsibility it is to make sure the firm complies with onerous, complicated legal demands and applicable legislation is one of the main job functions of these positions. Organizations are guided by regulatory compliance processes and strategies as they work to achieve their commercial objectives. Audit results that demonstrate compliance aid businesses in promoting themselves to customers. By assuming day-to-day responsibility for regulatory reporting and possessing specialized knowledge in regulatory reporting technologies, our Regulation and Compliance team at Inspirigence can assist clients at the strategic level by maximizing competitive regulation advantages to increase operational efficiency and profitability. This enables firms to reallocate their resources to their core operations, which are crucial to their overall success. We collaborate with you to cut down on expenses and business interruptions, freeing up management time in the process. Some legal requirements for compliance are made particularly to guarantee data security.
        </p>
      </div>
        <FormComponent/>
    </div>
  )
}

export default page