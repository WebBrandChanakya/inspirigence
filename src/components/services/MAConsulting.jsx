import React from "react";



const MAConsulting = ({heading,services,para}) => {
  return (
    <div className="bg-gray-100 dark:bg-primarybg flex justify-center items-center py-12">
      <div className="max-w-7xl w-full">
        <h2 className="text-center text-4xl text-secondary dark:text-white font-bold mb-6">
          
          {heading}
        </h2>
        {para &&<p className="px-6 text-center dark:text-white text-black mb-10">
      {para}
        </p>}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-secondary p-6 rounded-lg shadow border-b-4 border-primary"
            >
              <h3 className="font-semibold dark:text-gray-100 text-lg mb-2 text-gray-700">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MAConsulting;
