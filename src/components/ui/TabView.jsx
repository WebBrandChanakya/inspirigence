"use client";
import React, { useState } from "react";

 

const TabView = ({tabs ,heading}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className=" mx-auto  py-12  h-60 bg-primary mb-40">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-semibold text-white text-center mb-8">{heading}</h2>
      <div className="flex border-b dark:border-primary border">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 p-3 border text-center font-medium ${
              activeTab === index ? "bg-min text-white" : "bg-darkLvl1 dark:text-gray-200 text-gray-100"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4  bg-white dark:bg-darkLvl2  rounded-b-lg">{tabs[activeTab].content}</div>
    </div>
    </div>
  );
};

export default TabView;