import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export const LinksData = [
  {
    title: "Quick Links",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      {
        href: "/services",
        label: "Services",
        subLinks: [
          {
            href: "/services/investment-banking",
            label: "Investment Banking",
            subServices: [
              {
                href: "/merger-and-acquisition-consultant",
                label: "M&A Consulting",
              },
              { href: "/ipo-advisory-service-in-india", label: "IPO Advisory" },
              {
                href: "/corporate-due-diligence-services-in-india",
                label: "Corporate Due Diligence",
              },
              {
                href: "/private-equity-advisory-firm",
                label: "Private Equity Consulting",
              },
            ],
          },
          {
            href: "/services/capital-market",
            label: "Capital Market",
            subServices: [
              {
                href: "/nav-administration-services",
                label: "NAV administration Services",
              },
              {
                href: "/backoffice-middle-office-services",
                label: "Back Office & Middle Office Services",
              },
              {
                href: "/alternative-investment-fund-advisors-in-india",
                label: " Alternative Fund Advisors (AIFs)",
              },
              {
                href: "/portfolio-management-service",
                label: " Portfolio Management Service",
              },
              {
                href: "/investor-relationship-services",
                label: " Investor Relationship Services",
              },
              {
                href: "/fund-accounting-company-in-india/",
                label: "Fund Accounting Company",
              },
            ],
          },
          {
            href: "/services/compliance",
            label: "Compliance",
            subServices: [
              {
                href: "/regulatory-reporting-compliance-services",
                label: "Regulatory reporting & Compliance Services",
              },
              {
                href: "/registration-services",
                label: "Registration Services",
              },
              { href: "/cyber-security", label: "Cyber Security " },
            ],
          },
        ],
      },
      { href: "/corporate-entities", label: "Corporate Entities" },
      { href: "/blogs", label: "Blogs" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "#", label: "Fund Accounting" },
      { href: "#", label: "Regulatory Compliance" },
      { href: "#", label: "Investor Relations" },
      { href: "#", label: "Tax Consulting" },
      { href: "#", label: "Financial Advisory" },
    ],
  },
  {
    title: "Contact Info",
    links: [
      {
        href: "mailto:info@inspirigence.in",
        label: (
          <div className="flex items-center space-x-2">
            <FaEnvelope /> <span>info@inspirigence.in</span>
          </div>
        ),
      },
      {
        href: "mailto:support@inspirigence.in",
        label: (
          <div className="flex items-center space-x-2">
            <FaEnvelope /> <span>support@inspirigence.in</span>
          </div>
        ),
      },
      {
        href: "tel:+917021945422",
        label: (
          <div className="flex items-center space-x-2">
            <FaPhoneAlt /> <span>+91-7021945422</span>
          </div>
        ),
      },
      {
        href: "https://goo.gl/maps/xyz",
        label: (
          <div className="flex items-start space-x-2">
            <FaMapMarkerAlt className="text-lg mt-1" />{" "}
            <span>
              The Summit Business Bay,
              <br />
              Gundavali, Andheri-East, 400093,Mumbai, Maharashtra
            </span>
          </div>
        ),
        isAddress: true,
      },
    ],
  },
];
