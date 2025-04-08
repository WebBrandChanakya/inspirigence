import Link from 'next/link';
import React from 'react';
import { FaChartLine, FaCogs, FaUserTie, FaTachometerAlt, FaIdCard } from 'react-icons/fa';

const data = [
  { title: 'Share/Securities Accounting', icon: <FaChartLine /> },
  // { title: 'Algorithm trading', icon: <FaCogs /> },
  // { title: 'Personal Account Trading', icon: <FaUserTie /> },
  { title: 'Dashboards', icon: <FaTachometerAlt /> },
  { title: 'eKYC', icon: <FaIdCard /> },
];

const IconBox = () => {
  return (
    <>
    <div className='grid grid-cols-3 gap-10 w-full'>
      {data.map((item, index) => (
        <div key={index} className="flex flex-col transition-all duration-300 shadow-sm dark:shadow-gray-400 hover:-translate-y-2 bg-white dark:bg-primarybg border border-gray-200 border-t-4 border-t-primary  rounded-xl  p-4 w-full">
          <div className="flex items-center gap-2">
            <div className="text-primary text-2xl">{item.icon}</div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
      <Link href="/resources" className="bg-primary p-5  text-white rounded-xl transition-all duration-100 hover:scale-95 text-center my-8 block w-1/4 m-auto">
      View all tools
    </Link>
            </>
  );
};

export default IconBox;