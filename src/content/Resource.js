
import { FaChartLine, FaCheckCircle, FaDollarSign, FaUniversity, FaExchangeAlt, FaHandshake, FaChartBar, FaBalanceScale } from 'react-icons/fa'; 
 export const SubServices = [
    {
        title: "IPO Advisory",
        description: "We offer the best IPO (Initial Public Offerings) advisory services to assist you list your company on the Stock Market Exchange.",
        icon: <FaChartLine className="text-3xl text-white" />
    },
    {
        title: "Corporate Due Diligence",
        description: "We offer concise corporate due diligence, assessing risks, verifying information, and ensuring regulatory compliance for informed business decisions.",
        icon: <FaCheckCircle className="text-3xl text-white" />
    },
    {
        title: "Fund Accounting",
        description: "Consultation in Fund raising and also advising global fund managers to achieve the best possible terms.",
        icon: <FaDollarSign className="text-3xl text-white" />
    },
    {
        title: "Investment Banking Advisors",
        description: "Expert investment banking advisory services tailored to meet the unique needs of businesses across various sectors.",
        icon: <FaUniversity className="text-3xl text-white" />
    },
    {
        title: "Alternative Fund Advisors",
        description: "We strive to provide customized solutions that assist businesses and investors in reaching their financial objectives.",
        icon: <FaExchangeAlt className="text-3xl text-white" />
    },
    {
        title: "M&A Consulting Services",
        description: "Consultation encompasses a range of financial transactions, from mergers and acquisitions to asset purchases and management buyouts.",
        icon: <FaHandshake className="text-3xl text-white" />
    }
];
export const Top = [
    {
      title: "Applications",
      description: (
       
          <ul className="list-disc">
            <li>
            Share/Securities Accounting
            </li>
            <li>
            Algorithm trading
            </li>
          </ul>
        
      ),
      icon: <FaUniversity className="text-3xl text-white" />,
      link: "/services/investment-banking-advisors",
    },
    {
      title: "MIS",
      description: (
   
          <ul className="list-disc">
            <li>
            Dashboards
            </li>
            <li>
            Key Matrix Indicators
            </li>
          </ul>
       
      ),
      icon: <FaChartBar className="text-3xl text-white" />,
      link: "/services/capital-market",
    },
    {
      title: "Compliances",
      description: (
      
          <ul className="list-disc">
            <li>
            Personal Account Trading
            </li>
            <li>
            eKYC
            </li>
          </ul>
       
      ),
      icon: <FaBalanceScale className="text-3xl text-white" />,
      link: "/services/compliance",
    }
  ];
 export const ctaData = {
    title: "Get a personal consultation",
    subtext: "We will take care of your accounting and administrative services",
    buttonText: "Free Consultation",
    buttonLink: "/contact",
    imageSrc: "/images/home/cta.webp",
  };
export  const cardData = ["Experience", "Professional", "Trust Worthy"];