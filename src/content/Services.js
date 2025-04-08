

import {
  FaUniversity,
  FaChartBar,
  FaBalanceScale
} from "react-icons/fa";

import Link from 'next/link';

export const cardData = [
  {
    title: "Investment Banking",
    description: (
      
        <ul className="list-disc">
          <li>
            <Link href="/merger-and-acquisition-consultant" className=" text-gray-600 dark:text-gray-50 group-hover:text-white hover:underline">
              M&A Consulting
            </Link>
          </li>
          <li>
            <Link href="/ipo-advisory-service-in-india" className=" text-gray-600 dark:text-gray-50 group-hover:text-white hover:underline">
              IPO Advisory
            </Link>
          </li>
          <li>
            <Link href="/corporate-due-diligence-services-in-india" className=" text-gray-600 dark:text-gray-50 group-hover:text-white hover:underline">
              Corporate Due Diligence
            </Link>
          </li>
          <li>
            <Link href="/private-equity-advisory-firm" className=" text-gray-600 dark:text-gray-50 group-hover:text-white hover:underline">
              Private Equity Consulting
            </Link>
          </li>
        </ul>
     
    ),
    icon: <FaUniversity className="text-3xl text-white" />,
    link: "/services/investment-banking-advisors",
  },
  {
    title: "Capital Market",
    description: (
     
        <ul className="list-disc">
          <li>
            <Link href="/nav-administration-services" className=" text-gray-600 dark:text-gray-50 group-hover:text-white hover:underline">
              NAV Administration Services
            </Link>
          </li>
          <li>
            <Link href="/backoffice-middle-office-services" className=" text-gray-600 dark:text-gray-50 group-hover:text-white hover:underline">
              Back Office & Middle Office Services
            </Link>
          </li>
          <li>
            <Link href="/alternative-investment-fund-advisors-in-india" className=" text-gray-600 dark:text-gray-50 group-hover:text-white hover:underline">
              Alternative Fund Advisors (AIFs)
            </Link>
          </li>
          <li>
            <Link href="/portfolio-management-service" className=" text-gray-600 dark:text-gray-50 group-hover:text-white hover:underline">
              Portfolio Management Service
            </Link>
          </li>
          <li>
            <Link href="/investor-relationship-services" className=" text-gray-600 dark:text-gray-50 group-hover:text-white hover:underline">
              Investor Relationship Services
            </Link>
          </li>
          <li>
            <Link href="/fund-accounting-company-in-india" className=" text-gray-600 dark:text-gray-50 group-hover:text-white hover:underline">
              Fund Accounting Company
            </Link>
          </li>
        </ul>
     
    ),
    icon: <FaChartBar className="text-3xl text-white" />,
    link: "/services/capital-market",
  },
  {
    title: "Compliance",
    description: (
    
        <ul className="list-disc">
          <li>
            <Link href="/regulatory-reporting-compliance-services" className=" text-gray-600 dark:text-gray-50 group-hover:text-white hover:underline">
              Regulatory Reporting & Compliance Services
            </Link>
          </li>
          <li>
            <Link href="/registration-services" className=" text-gray-600 dark:text-gray-50 group-hover:text-white hover:underline">
              Registration Services
            </Link>
          </li>
          <li>
            <Link href="/cyber-security" className=" text-gray-600 dark:text-gray-50 group-hover:text-white hover:underline">
              Cyber Security
            </Link>
          </li>
        </ul>
   
    ),
    icon: <FaBalanceScale className="text-3xl text-white" />,
    link: "/services/compliance",
  }
];


export const ctaData = {
  title: "Get Your Free Consultation Today!",
  description: "Our team will assess your needs, answer your questions, and provide valuable insights tailored to your unique situation. Don't miss this opportunity to gain expert advice at no cost—schedule your free consultation today and move forward with confidence!",
  buttonText: "Free Consultation",
  buttonLink: "#quote",
  imageSrc: "/images/services/services-cta.jpg",
};
