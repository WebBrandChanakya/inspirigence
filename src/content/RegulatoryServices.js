import { FaBalanceScale, FaGavel, FaShieldAlt } from "react-icons/fa";
export const Data = {
    heading:"OVERVIEW",
    description1:
      "The observance of laws, rules, directives, and specifications pertinent to an organization’s business processes is referred to as regulatory compliance. Regulatory compliance violations frequently result in legal sanctions, including federal penalties.",
   
    contactLink: "/contact",
    imageSrc: "/images/services/reporting.jpg",
  };
  

export const strategy = [
  {
    icon: <FaBalanceScale className="text-primary text-3xl" />, 
    text: "Choosing and hiring compliance roles and accountabilities, as well as the compliance functions required by legal, compliance, audit, and business departments.",
  },
  {
    icon: <FaGavel className="text-primary text-3xl" />, 
    text: "Determining how emerging regulations will affect the business direction and existing business models.",
  },
  {
    icon: <FaShieldAlt className="text-primary text-3xl" />, 
    text: "Incorporating and developing a compliance culture and promoting this culture throughout the organization; anticipating compliance trends and integrating regulatory processes that increase efficiency.",
  },
];
