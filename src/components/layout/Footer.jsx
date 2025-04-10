import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Follow, LinksData } from "@/content/Links";

const Footer = () => (
  <footer className=" bg-[#f5f5f5] dark:bg-darkLvl2">
    <div className="mx-auto max-w-7xl  pt-10 ">
      <div className="grid grid-cols-2 pb-8 lg:grid-cols-5 gap-8">
        <div className="col-span-2 text-left">
          <Link href="/">
            <Image src="/images/logo/logo-footer.png" width={250} height={200} className="rounded-lg" alt="Inspirigence Advisors" />
          </Link>
          <p className="py-4 pr-8 text-sm text-gray-500 dark:text-gray-50">
            We at Inspirigence Advisors specialize in Fund Accounting, Regulatory Compliance, Accounting services, and more for Private Equity/Hedge Funds and businesses.
          </p>
          <Link href="/contact" className="py-2.5 px-5 h-9 block w-fit bg-primary hover:scale-95 rounded-full shadow-sm text-xs text-white transition-all">
            Contact us
          </Link>
        </div>
        {LinksData.map((section, index) => (
          <div key={index} className="text-left col-span-2 lg:col-span-1">
            <h4 className="text-lg text-secondary dark:text-white font-medium mb-4">{section.title}</h4>
            <ul className="text-sm space-y-2">
              {section.links.map((item, i) => (
                <li key={i}>
                  {item.href?<Link href={item.href} className="text-secondary hover:text-primary dark:text-white">
                    {item.label}
                  </Link>:<div className='text-secondary hover:text-primary dark:text-white'>{item.label}</div>
                  }
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="py-7 border-t border-gray-200">
        <div className="flex lg:items-center flex-col lg:justify-between lg:flex-row">
          <span className="text-sm text-gray-500 dark:text-gray-50">© 2025 • Inspirigence Advisors</span>
          <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
            <Link href={Follow.Instagram} className="w-8 h-8 flex justify-center items-center bg-primary rounded-full">
              <FaInstagram className="text-white text-lg" />
            </Link>
            <Link href={Follow.Twitter} className="w-8 h-8 flex justify-center items-center bg-primary rounded-full ">
              <FaXTwitter className="text-white text-lg" />
            </Link>
            <Link href={Follow.Facebook} className="w-8 h-8 flex justify-center items-center bg-primary rounded-full ">
              <FaFacebookF className="text-white text-lg" />
            </Link>
            <Link href={Follow.LinkedIn} className="w-8 h-8 flex justify-center items-center bg-primary rounded-full ">
              <FaLinkedin className="text-white text-lg" />
            </Link>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-50">Powered By <Link href="https://brandchanakya.in/">Brand Chanakya</Link></span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
