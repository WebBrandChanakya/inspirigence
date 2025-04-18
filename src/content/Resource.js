
import { FaChartLine, FaCheckCircle, FaDollarSign, FaUniversity, FaExchangeAlt, FaHandshake, FaChartBar, FaBalanceScale } from 'react-icons/fa'; 
export const SubServices = [
  {
    title: "IPO Advisory",
    description:
      "We offer the best IPO (Initial Public Offerings) advisory services to assist you list your company on the Stock Market Exchange.",
    icon: <FaChartLine className="text-3xl text-white" />,
    link: "/ipo-advisory-service-in-india",
  },
  {
    title: "Corporate Due Diligence",
    description:
      "We offer concise corporate due diligence, assessing risks, verifying information, and ensuring regulatory compliance for informed business decisions.",
    icon: <FaCheckCircle className="text-3xl text-white" />,
    link: "/corporate-due-diligence-services-in-india",
  },
  {
    title: "M&A Consulting Services",
    description:
      "Consultation encompasses a range of financial transactions, from mergers and acquisitions to asset purchases and management buyouts.",
    icon: <FaHandshake className="text-3xl text-white" />,
    link: "/merger-and-acquisition-consultant",
  },
  {
    title: "Fund Accounting",
    description:
      "Consultation in Fund raising and also advising global fund managers to achieve the best possible terms.",
    icon: <FaDollarSign className="text-3xl text-white" />,
    link: "/fund-accounting-company-in-india",
  },
  {
    title: "Alternative Fund Advisors",
    description:
      "We strive to provide customized solutions that assist businesses and investors in reaching their financial objectives.",
    icon: <FaExchangeAlt className="text-3xl text-white" />,
    link: "/alternative-investment-fund-advisors-in-india",
  },
  {
    title: "Portfolio Management Service",
    description:
      "Expert-driven investments tailored to your goals. Maximize returns with professional fund management and risk diversification.",
    icon: <FaUniversity className="text-3xl text-white" />,
    link: "/portfolio-management-service",
  },
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

    }
  ];
 export const ctaData = {
    title: "Get a personal consultation",
    subtext: "We will take care of your accounting and administrative services",
    buttonText: "Free Consultation",
    buttonLink: "#quote",
    imageSrc: "/images/resources/cta.jpg",
  };
export  const cardData = ["Experience", "Professional", "Trust Worthy"];