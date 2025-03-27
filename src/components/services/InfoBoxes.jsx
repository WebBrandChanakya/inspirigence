import React from "react";



const InfoBoxes = ({data}) => {
  return (
    <div className={`grid ${data.length==1?"lg:grid-cols-1":"lg:grid-cols-2"}  gap-10 px-4`}>
      {data.map((section, index) => (
        <div key={index} className="bg-gray-100 dark:bg-secondary p-6 rounded-lg shadow-md">
          {section.title&& <h3 className="text-lg font-bold mb-2 text-secondary dark:text-white">{section.title}</h3>}
          
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            {section.content.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default InfoBoxes;
