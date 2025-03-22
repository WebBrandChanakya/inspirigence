import React from "react";
import { FaCheckSquare } from "react-icons/fa";

const points = [
  "Together with our customers, we secure private equity funding to support their upcoming growth phase.",
  "We provide our client firms impartial and top private equity consulting services and position them effectively for the right finances.",
  "Through their extensive knowledge, our professionals are able to pinpoint important possibilities and place transactions in line with new trends.",
  "We are able to achieve capital raise closing in a timely way with a clear grasp of risks, tasks, scheduling, and integration-related factors of a transaction thanks to our extensive understanding of the deal procedure and project management abilities.",
];

const WhatWeDo = () => {
  return (
    <div className=" text-gray-900 dark:text-white py-10 shadow-lg bg-primarybg p-16 rounded mx-16 mt-10">
      <h2 className="text-2xl font-semibold mb-6">What we do?</h2>
      <ul className="space-y-4">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3 text-lg">
            <div>

              <FaCheckSquare className="text-green-500 w-6 h-6 mt-1" />
              </div>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhatWeDo;
