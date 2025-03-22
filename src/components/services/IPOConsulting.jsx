import React from "react";
import { FaDollarSign, FaHandshake, FaProjectDiagram, FaClipboardList, FaMobileAlt, FaCalendarCheck } from "react-icons/fa";

const services = [
  {
    icon: <FaDollarSign className="text-green-600 text-3xl" />,
    text: "Create a true and clear investment proposal as well as a strategic justification for the IPO listing.",
  },
  {
    icon: <FaHandshake className="text-green-600 text-3xl" />,
    text: "Create an IPO rollout strategy that specifies communications-related actions and responsibilities.",
  },
  {
    icon: <FaProjectDiagram className="text-green-600 text-3xl" />,
    text: "Create an investor relations architecture and inquiry processing methods.",
  },
  {
    icon: <FaClipboardList className="text-green-600 text-3xl" />,
    text: "Develop and improve disclosure and reporting procedures.",
  },
  {
    icon: <FaMobileAlt className="text-green-600 text-3xl" />,
    text: "Get prepared for the first earnings call.",
  },
  {
    icon: <FaCalendarCheck className="text-green-600 text-3xl" />,
    text: "Make arrangements for listing day coverage and event assistance.",
  },
];

const IPOConsulting = () => {
  return (
    <div className=" flex justify-center items-center ">
      <div className="">
        <h2 className="text-center text-2xl text-secondary dark:text-white font-bold mb-6">
          How our best IPO consulting services in India may assist you with IPO listing:
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-200 dark:bg-secondary p-6 rounded-lg shadow flex flex-col items-start">
              {service.icon}
              <p className="text-gray-700 dark:text-gray-300 mt-4">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IPOConsulting;
