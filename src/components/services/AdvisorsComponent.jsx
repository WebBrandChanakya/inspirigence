'use client';

import React from 'react';

const data = [
  {
    title: 'Expertise and Experience',
    content:(<>
    Backed by a team of highly experienced professionals in the field of alternative investments, Inspirigence Advisors stands as the best Alternative Fund Advisor in India, delivering unmatched expertise.Our advisors possess a deep understanding of evolving market trends, the complex <a className='text-primary' href='/regulatory-landscape-for-aif-in-india/'>regulatory framework</a> of AIF’s, and sophisticated investment strategies.This knowledge allows us to craft customized solutions tailored to your specific financial objectives and risk tolerance. We excel at identifying lucrative opportunities, mitigating potential risks, and optimizing portfolio performance. Our team’s commitment to staying ahead of industry developments ensures that every recommendation is informed, strategic, and aligned with your long-term wealth creation goals.</>)
  },
  {
    title: 'Comprehensive Services',
    content:
      'At Inspigience, we are proud to be recognized as the hallmark of excellence among Alternative Fund Advisors in India. With an unwavering commitment to delivering integrated solutions, our unparalleled depth of sectoral, niche, and market experience is what leads in the industry. Our team of experienced professionals brings deep expertise, strategic insights, and a client-focused approach to provide innovative and tailored solutions. By staying ahead of market trends and navigating the complexities of alternative investments, we empower our clients to make informed decisions, solidifying Inspigience’s stance as the trusted name in Alternative Fund Advisors, where excellence meets reliability.',
  },
  {
    title: 'Comprehensive Support',
    content:
      'As one of the leading Alternative Fund Advisors in India, we take pride in building relationships with our clients that transcend mere transactional engagements. Our commitment lies in offering holistic support, actively engaging with our clients to shape their understanding of unique financial goals and aligning them with strategic, well-informed investment decisions. From conducting regular portfolio reviews to providing insightful and transparent analysis, we ensure you are equipped with the knowledge and confidence to make proactive choices. Our personalized approach fosters trust and empowers you to navigate the dynamic world of alternative investments seamlessly.',
  },
  {
    title: 'Diverse Fund Offerings',
    content:
      'As one of India’s foremost alternative investment fund advisors, we pride ourselves on providing unparalleled access to a broad spectrum of Alternative Funds (AIFs) designed to meet diverse investor needs. Our range of offerings spans equity, debt, hybrid, and sector-focused funds, allowing investors to tap into niche markets with high growth potential. Our goal is to offer premium-quality funds that align seamlessly with your financial goals and risk appetite. By leveraging our deep market expertise and robust network, we identify and curate top-performing funds to build a well-diversified portfolio that drives long-term growth and sustainable wealth creation.',
  },
];

const AdvisorsComponent = () => {
  return (
    <div className=" mx-auto py-12  px-28">
      <h2 className="text-4xl font-bold text-center text-secondary dark:text-white mb-6">
        Inspigience – Alternative Fund Advisors
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300  mb-8">
        Inspigience Advisors is a leader in providing exceptional Alternative Investment Fund advisory services in India.
        More than just advisors, we are strategic partners in building financial success, assisting investors toward rewarding opportunities in the ever-evolving world of alternative investments.
      </p>
      {data.map((item, index) => (
        <div key={index} className="bg-primarybg shadow-md rounded-lg p-6 mb-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default AdvisorsComponent;
