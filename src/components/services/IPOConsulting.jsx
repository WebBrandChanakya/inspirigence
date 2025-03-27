import React from "react";


const IPOConsulting = ({services,heading}) => {
  return (
    <div className=" flex justify-center items-center ">
      <div className="">
        <h2 className="text-center text-2xl text-secondary dark:text-white font-bold mb-6">
          {heading}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-200 dark:bg-primarybg p-6 rounded-lg shadow flex flex-col items-start">
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
