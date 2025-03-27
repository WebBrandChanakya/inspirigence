import React from "react";
import { AiFillCheckCircle } from "react-icons/ai"; // Importing check-circle icon

const SideCard = ({ cardData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {cardData.map((item, index) => (
        <div
          key={index}
          className="flex space-x-2 items-center bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div>

          <AiFillCheckCircle className="text-primary text-3xl my-3"/>
          </div>
          <h5 className="mu-3 text-lg font-semibold text-gray-900 dark:text-white text-center">
            {item}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default SideCard;
