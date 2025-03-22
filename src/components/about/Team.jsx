import Image from "next/image";
import Link from "next/link";
import React from "react";

const teamMembers = [
  {
    name: "CA Ashish Jain",
    qualification: "B COM., ACA",
    image: "/images/team/ashish-jain.jpg",
    link: "#", // Replace with actual link
  },
  {
    name: "CA Virendra Jain",
    qualification: "B COM., FCA, DISA",
    image: "/images/team/virendra-jain.jpg",
    link: "#", // Replace with actual link
  },
  {
    name: "CA Arpit Jain",
    qualification: "B COM., FCA, DISA",
    image: "/images/team/arpit-jain.jpg",
    link: "#", // Replace with actual link
  },
];

const Team = () => {
  return (
    <div className="bg-primarybg">
      <div className="mx-auto px-28 py-12">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-secondary dark:text-gray-50 text-4xl font-bold">Meet our team</h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid sm:grid-cols-3 gap-16 justify-center mt-12  mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#f5f5f5] dark:bg-secondary shadow-xl p-3 border rounded-lg">
              <Image
                width={500}
                height={600}
                src={member.image}
                alt={member.name}
                className="w-full object-contain aspect-square object-top rounded-lg"
              />
              <div className="text-center flex justify-center flex-col items-center  mt-4 mb-1">
                <h4 className="text-base font-semibold text-primary">{member.name}</h4>
                <p className="text-xs mt-1 text-gray-800 dark:text-gray-300">{member.qualification}</p>
                <Link href={member.link} className="bg-primary hover:scale-95 transition-all duration-100 transform text-white rounded w-1/3 p-3 text-sm mt-2 block">
                  Know More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Section */}
      <div className="w-full bg-secondary dark:bg-primary h-40 -mt-28"></div>
    </div>
  );
};

export default Team;
