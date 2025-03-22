import { FaNetworkWired, FaLaptopCode, FaCloud , FaLock, FaShieldAlt, FaFileSignature } from "react-icons/fa";
export const Data = {
    heading: "Cybersecurity Services",
    description1:
      "In today's digital landscape, cyber threats are more sophisticated than ever. Our cutting-edge cybersecurity solutions protect businesses from cyberattacks, data breaches, and online threats, ensuring a secure and resilient digital environment.",
    description2:
      "With a proactive approach to security, we help organizations safeguard their critical assets, maintain compliance, and mitigate risks with advanced threat detection and response strategies.",
    contactLink: "/contact",
    imageSrc: "/images/home/about.webp",
  };

export const Services = [
  {
    title: "Network Security",
    description:
      "Protects your IT infrastructure from unauthorized access, cyber threats, and malware with advanced firewall protection, intrusion detection, and end-to-end encryption.",
    icon: <FaNetworkWired className="text-3xl text-white" />,
  },
  {
    title: "Endpoint Security",
    description:
      "Secures devices like laptops, mobile phones, and workstations from cyber threats with antivirus protection, behavioral analytics, and real-time threat detection.",
    icon: <FaLaptopCode className="text-3xl text-white" />,
  },
  {
    title: "Cloud Security",
    description:
      "Ensures secure cloud storage, applications, and workloads using data encryption, identity access management (IAM), and multi-factor authentication (MFA).",
    icon: <FaCloud  className="text-3xl text-white" />,
  },
  {
    title: "Data Protection & Encryption",
    description:
      "Prevents data leaks, unauthorized access, and loss of sensitive information with advanced encryption, tokenization, and compliance-driven data governance.",
    icon: <FaLock className="text-3xl text-white" />,
  },
  {
    title: "Threat Intelligence & Monitoring",
    description:
      "24/7 cyber threat monitoring, real-time alerts, and AI-powered analytics to detect and respond to cyber threats proactively.",
    icon: <FaShieldAlt className="text-3xl text-white" />,
  },
  {
    title: "Security Audits & Compliance",
    description:
      "Comprehensive regulatory compliance solutions, penetration testing, security assessments, and risk analysis for GDPR, ISO 27001, HIPAA, and more.",
    icon: <FaFileSignature className="text-3xl text-white" />,
  },
];

  