"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "CA Ashish Jain",
    qualification: "B COM., ACA",
    image: "/images/team/ashish-jain.jpg",
    link: "#",
    linkedin:"https://www.linkedin.com/in/ashishgangwal/",
    details: "CA Ashish Jain is a qualified Chartered Accountant, IIM, ISB and Investment Operating Certificate (IOC) from London. He is having more than 25 years of experience in Investment Banking, Business Consulting, Fund Accounting and Fund Administration, Portfolio Management System (PMS), Alternative Investment Funds (AIF) and Hedge Fund Accounting. He is the managing partner of Inspirigence Advisors LLP and Ex Deutsche Bank(DB), Capita, State Street, Morgan Stanley, and Kotak.",
  },
  {
    name: "CA Virendra Jain",
    qualification: "B COM., FCA, DISA",
    image: "/images/team/virendra-jain.jpg",
    link: "#",
    linkedin:"https://www.linkedin.com/in/ca-virendra-jain-5bb28635/",
    details: "CA Virendra Jain is the founder partner of the CA firm Jain V. & Company and a consultant to Inspirigence Advisors LLP. He has expert-level knowledge in the fields of Stock Markets, SEBI compliances, Corporate Law Matters. He is a rank holder and medalist Commerce Graduate from the University of Ajmer, Rajasthan, and a Fellow Member of the Institute of Chartered Accountants of India. He has Certification with the National Institute Of Securities Market (NISM). He was co-opted member of the committee of Banking and Finance at WIRC. He is also a qualified Information System Auditor DISA ( ICAI). He has been serving the profession since 1996 and had been instrumental in the growth of the firm. He has also done Certificate Course on Forensic Accounting and Fraud Detection (FAFD).",
  },
  {
    name: "CA Arpit Jain",
    qualification: "B COM., FCA, DISA",
    image: "/images/team/arpit-jain.jpg",
    link: "#",
    details: "CA Arpit Jain joined the firm in the year 2011. He has sound academic and professional qualifications. He brings with him intense knowledge in the fields of Indirect Taxes, International Taxation and Government Audits. He is also a qualified Information System Auditor DISA (ICAI). He has completed a certificate course on “Concurrent Audit of Banks “.He is a Fellow Member of ICAI and has been serving the profession since 2010. He has also done Certificate Course on Forensic Accounting and Fraud Detection (FAFD).",
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="bg-primarybg">
      <div className="mx-auto max-w-7xl py-12">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-secondary dark:text-gray-50 text-4xl font-bold capitalize">Meet our team</h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid sm:grid-cols-3 gap-16 justify-center mt-12 mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#f5f5f5] dark:bg-darkLvl2 shadow-xl p-3 border rounded-lg"
            >
              <Image
                width={500}
                height={600}
                src={member.image}
                alt={member.name}
                className="w-full object-contain aspect-square object-top rounded-lg"
              />
              <div className="text-center flex justify-center flex-col items-center mt-4 mb-1">
                <h4 className="text-base font-semibold text-primary dark:text-white">{member.name}</h4>
                <p className="text-xs mt-1 text-gray-800 dark:text-gray-300">
                  {member.qualification}
                </p>
                <button
                  onClick={() => setSelectedMember(member)}
                  className="bg-min hover:scale-95 transition-all duration-100 transform text-white rounded w-1/3 p-3 text-sm mt-2 block"
                >
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Section */}
      <div className="w-full bg-secondary dark:bg-primary h-40 -mt-28"></div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full transform transition-opacity opacity-100 scale-100">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 text-xl"
            >
              &times;
            </button>
            <div className="text-center flex flex-col items-center space-y-2">
              <Image
                width={200}
                height={200}
                src={selectedMember.image}
                alt={selectedMember.name}
                className="mx-auto rounded-full object-cover"
              />
              <h3 className="text-xl font-bold text-primary dark:text-white mt-4">{selectedMember.name}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                {selectedMember.qualification}
              </p>
              {selectedMember.linkedin&&<Link href={selectedMember.linkedin} className="w-8 h-8 flex justify-center items-center bg-primary rounded-full ">
              <FaLinkedin className="text-white text-lg" />
            </Link>}
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-left">{selectedMember.details}</p>
              <button
                onClick={() => setSelectedMember(null)}
                className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:scale-95 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
