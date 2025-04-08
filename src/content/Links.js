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
            href: "/services/investment-banking-advisors",
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
                href: "/alternative-investment-fund-advisors-in-india",
                label: " Alternative Fund Advisors (AIFs)",
              },
              {
                href: "/portfolio-management-service",
                label: " Portfolio Management Service",
              },
              {
                href: "/nav-administration-services",
                label: "Fund Administration/Fund Accounting Services",
              },
              {
                href: "/investor-relationship-services",
                label: " Investor Relationship Services",
              },
              // {
              //   href: "/backoffice-middle-office-services",
              //   label: "Back Office & Middle Office Services",
              // },
              // {
              //   href: "/fund-accounting-company-in-india/",
              //   label: "Fund Accounting Company",
              // },
            ],
          },
          {
            href: "/services/compliance",
            label: "Compliance",
            subServices: [
              {
                href: "/regulatory-reporting-compliance-services",
                label: "Regulatory Reporting & Compliance Services",
              },
              {
                href: "/registration-services",
                label: "Registration Services",
              },
              { href: "/cyber-security", label: "Cyber Security " },
            ],
          },
          {
            href: "/services/business-consulting",
            label: "Business Consulting",
           
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
      {  href: "/services/investment-banking-advisors",
      label: "Investment Banking" },
      { href: "/services/capital-market",
      label: "Capital Market", },
      {  href: "/services/compliance",
      label: "Compliance",},
      {  href: "/services/investment-banking-advisors",
      label: "Business Consulting" },
     
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
        // href: "https://goo.gl/maps/xyz",
        label: (
          <div className="flex items-start space-x-2">
            <div>
                          <FaMapMarkerAlt className="text-lg mt-1" />{" "}
              </div>
            <span>
            414A, B-wing, Kanakia Wall Street.Opposite Vijay Sales, Andheri - Kurla Rd, Chakala, Andheri East, Mumbai, Maharashtra 400059
            </span>
          </div>
        ),
        isAddress: true,
      },
    ],
  },

];
export const Follow = {
      Instagram:"https://www.instagram.com/inspirigence_advisors/",
      Facebook:"https://www.facebook.com/inspirigenceadvisors",
      Twitter:"https://x.com/Inspirigence",
      LinkedIn:"https://www.linkedin.com/company/inspirigence-advisors/",
    }
  
