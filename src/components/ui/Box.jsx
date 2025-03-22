import React from "react";

const Box = ({ data }) => {
  return (
    <div className="h-full w-full lg:w-auto pt-12 p-4">
      <div className="flex flex-wrap justify-center gap-5 gap-y-10">
        {data.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl  bg-white dark:bg-secondary p-6 text-center shadow-xl hover:scale-110 transition-all duration-300`}          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-primary shadow-lg shadow-teal-500/40">
              {item.icon}
            </div>
            <h1 className="text-darken mb-3 text-xl dark:text-white text-black font-medium lg:px-14">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
   


    </div>
  );
};

export default Box;
