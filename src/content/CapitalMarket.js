import {
    FaCalculator,
    FaDatabase,
    FaChartPie,
    FaBriefcase,
    FaUsers,
    FaFileInvoiceDollar
} from "react-icons/fa";

export const SubServices = [
    {
        title: "Alternative Fund Advisors (AIFs)",
        description:
            "Expert advisory services for Alternative Investment Funds (AIFs), helping clients navigate regulatory frameworks and optimize fund performance.",
        icon: <FaChartPie className="text-3xl text-white" />,
        link: "/alternative-investment-fund-advisors-in-india",
    },
    {
        title: "Portfolio Management Service",
        description:
            "Tailored investment strategies and portfolio management services to help clients achieve their financial goals.",
        icon: <FaBriefcase className="text-3xl text-white" />,
        link: "/portfolio-management-service",
    },
    {
        title: "Fund Administration/Fund Accounting Services",
        description:
            "Comprehensive NAV calculation and fund administration services to ensure accurate valuation and compliance with industry standards.",
        icon: <FaCalculator className="text-3xl text-white" />,
        link: "/nav-administration-services",
    },
    // {
    //     title: "Back Office & Middle Office Services",
    //     description:
    //         "End-to-end support for trade processing, risk management, and reporting to enhance operational efficiency.",
    //     icon: <FaDatabase className="text-3xl text-white" />,
    //     link: "/backoffice-middle-office-services",
    // },
    {
        title: "Investor Relationship Services",
        description:
            "Dedicated investor relations support, including communication strategies and stakeholder engagement for fund managers and companies.",
        icon: <FaUsers className="text-3xl text-white" />,
        link: "/investor-relationship-services",
    },
    // {
    //     title: "Fund Accounting Company",
    //     description:
    //         "Specialized fund accounting services to ensure accurate financial reporting, regulatory compliance, and seamless operations.",
    //     icon: <FaFileInvoiceDollar className="text-3xl text-white" />,
    //     link: "/fund-accounting-company-in-india",
    // }
];
