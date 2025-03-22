import FormComponent from '@/components/layout/FormComponent'
import PageBanner from '@/components/ui/PageBanner'
import React from 'react'

export const page = () => {
  return (
    <div className='bg-white dark:bg-secondary'>
        <PageBanner data={"Registration Services"}/>
        <p className="px-6 text-center dark:text-white text-black lg:text-left">
        Capital Market entities are regulated by the regulators to safeguard the interest of investors. There are specific registration requirements from the regulators before the start of such businesses. We have got a specialized team having expertise in Company secretarial work and business registration with the various regulatory bodies like SEBI, RBI, etc.
        </p>
        <FormComponent/>
    </div>
  )
}
