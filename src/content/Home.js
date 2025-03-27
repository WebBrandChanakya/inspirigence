import {
  FaChartLine,
  FaUniversity,
  FaExchangeAlt,
  FaHandshake,
  FaCheckCircle,
  FaDollarSign,
} from "react-icons/fa";
export const services = [
  {
    name: <>Investment Banking</>,
    icon: <FaCheckCircle className="text-3xl text-white" />,
    link: "/services/investment-banking-advisors",
  },

  {
    name: <>Compliance</>,
    icon: <FaDollarSign className="text-3xl text-white" />,
    link: "/services/compliance",
  },
  {
    name: <>Capital Market Advisory</>,
    icon: <FaChartLine className="text-3xl text-white" />,
    link: "/services/capital-market",
  },
];

export const aboutData = {
  companyName: "Inspirigence",
  description1:
    "Inspirigence Advisors is a popular name among the top financial service providers in India, offering various services with unmatched expertise such as; Fund Accounting, Fund Administration, Regulatory compliance, Accounting services, Virtual CFO, Investor Relationships, and Advisory services. With a focus on serving various clients, including private equity/hedge funds, business entities, and corporates, we offer tailored solutions to meet their unique needs. At Inspirigence, our team consists of experienced professionals, including qualified accountants, company secretaries, legal experts, and financial professionals. We provide comprehensive financial advisory services, leveraging our expertise and industry insights to drive our clients’ success. ",
  description2:
    "We are committed to delivering excellence to our clients, empowering businesses to thrive in today’s dynamic marketplace.",
  imageSrc: "/images/home/about.webp",
};
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
export const ctaData = {
  title: "Explore Our Strategic Financial Solutions.",
  description:
    "Unlock smarter financial strategies tailored to your business needs. Our expert-driven solutions help you maximize growth, optimize investments, and stay ahead in a competitive market. Subscribe now to receive insights, exclusive reports, and expert guidance—straight to your inbox.",
  subtext: "Let’s build a stronger financial future together!",
  buttonText: "Explore Services",
  buttonLink: "/services",
  imageSrc: "/images/home/cta.webp",
};

export const cardData = [
  "Smooth integration and reduced risks",
  "Planning the information structure",
  "Designing various MIS",
];
