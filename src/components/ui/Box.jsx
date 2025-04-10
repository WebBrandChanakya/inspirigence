import Link from "next/link";
import React from "react";

const Box = ({ data ,size}) => {
  // ${index==2&&size?"col-span-2":""}
  return (
    <div className="h-full w-full lg:w-auto pt-12 ">
      <div className="grid grid-cols-2 justify-center gap-10">
        {data.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl ${index==2&&size?"col-span-2":""}  bg-white dark:bg-darkLvl2 p-6 text-center shadow-[0_0_10px_rgba(0,0,0,0.25)] hover:scale-110 transition-all duration-300`}          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-secondary shadow-lg shadow-teal-500/40">
              {item.icon}
            </div>
            
            {item.link?<Link href={item.link}>
            <h1 className="text-darken mb-3 text-xl dark:text-white text-black font-medium lg:px-1">
              {item.name}
            </h1>
            </Link>: 
            <h1 className="text-darken mb-3 text-xl dark:text-white text-black font-medium lg:px-14">
              {item.name}
            </h1>}
          </div>
        ))}
      </div>
   


    </div>
  );
};

export default Box;
