import {
    FaFileContract,
    FaClipboardCheck,
    FaShieldAlt
} from "react-icons/fa";

export const SubServices = [
    {
        title: "Regulatory Reporting & Compliance Services",
        description:
            "Ensure seamless regulatory reporting and compliance with industry standards, reducing risks and meeting legal obligations.",
        icon: <FaFileContract className="text-3xl text-white" />,
        link: "/regulatory-reporting-compliance-services",
    },
    {
        title: "Registration Services",
        description:
            "Hassle-free registration services for businesses, funds, and financial entities, ensuring smooth regulatory approval and compliance.",
        icon: <FaClipboardCheck className="text-3xl text-white" />,
        link: "/registration-services",
    },
    {
        title: "Cyber Security",
        description:
            "Comprehensive cybersecurity solutions to protect financial institutions and businesses from data breaches, fraud, and cyber threats.",
        icon: <FaShieldAlt className="text-3xl text-white" />,
        link: "/cyber-security",
    }
];
