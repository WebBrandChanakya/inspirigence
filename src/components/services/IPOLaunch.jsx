"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// Data for Images and Text Content


function IPOLaunch({ipoData}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mx-auto rounded-2xl flex flex-col md:flex-row items-center">
      {/* Image Section - Render images dynamically */}
      {ipoData.images.map((image) => (
        <Image
          key={image.id}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="object-cover"
        />
      ))}

      {/* Text Content Section */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-green-600">
        {ipoData.heading}
        </h2>

        {/* Static Content Mapping */}
        {ipoData.content.map((item) => (
          <p key={item.id} className="text-gray-600 dark:text-gray-200 mt-3">
            {item.text}
          </p>
        ))}

        {/* Expandable Section */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            expanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {ipoData.expandableContent.map((item) => (
            <p key={item.id} className="text-gray-600 dark:text-gray-200 mt-3">
              {item.text}
            </p>
          ))}
        </div>

        {/* Read More / Read Less Button */}
        <button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2 transition duration-300"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less" : "Read More"}
          <FaArrowUpRightFromSquare className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default IPOLaunch;
