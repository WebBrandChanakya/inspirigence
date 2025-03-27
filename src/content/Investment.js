import {
  FaChartLine,
  FaHandshake,
  FaCheckCircle,
  FaDollarSign,
} from "react-icons/fa";

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
    title: "Private Equity Consulting",
    description:
      "Expert guidance on private equity investments, fundraising strategies, portfolio management, and maximizing investor returns.",
    icon: <FaDollarSign className="text-3xl text-white" />,
    link: "/private-equity-advisory-firm",
  },
];
