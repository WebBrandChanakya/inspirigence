import About from '@/components/home/About'
import FormComponent from '@/components/layout/FormComponent'
import Card from '@/components/ui/Card'
import PageBanner from '@/components/ui/PageBanner'
import { Data, Services } from '@/content/cyber-security'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white dark:bg-secondary'>
            <PageBanner data={"Cyber Security"}/>
            <About data={Data}/>
            <div className="py-14 px-28">
        <h3 className="text-4xl font-bold dark:text-primary text-secondary text-center mb-10">
        Why Cybersecurity is Essential?
        </h3>
        <p className="px-6 text-center dark:text-white text-black lg:text-left">
        In today’s interconnected world, cybersecurity is not just an option—it is a necessity. With the rise of sophisticated cyber threats such as malware, ransomware, phishing, and data breaches, businesses and individuals face constant risks that can lead to financial losses, operational disruptions, and reputational damage. A single cyberattack can compromise sensitive customer data, expose confidential business information, and result in hefty legal consequences due to non-compliance with industry regulations like GDPR, HIPAA, and ISO 27001. Moreover, cyber incidents can disrupt business continuity, causing downtime, loss of productivity, and eroding customer trust. Investing in robust cybersecurity measures ensures data protection, financial security, and regulatory compliance while strengthening an organization’s resilience against evolving cyber threats. By implementing proactive risk mitigation strategies, continuous threat monitoring, and advanced security protocols, businesses can safeguard their digital infrastructure, maintain operational stability, and build long-term credibility in an increasingly digital landscapess.
        </p>
      </div>
      <div className=" py-14 bg-primarybg">
        <h3 className="text-4xl font-bold dark:text-primary text-secondary text-center mb-10">
        Our Cybersecurity Services
        </h3>
        <Card cardData={Services} hover />
      
      </div>
      <FormComponent/>
    </div>
  )
}

export default page