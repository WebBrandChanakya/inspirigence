import Image from "next/image";
import React from "react";
import { FaBuilding, FaShieldAlt, FaUserTie, FaHandHoldingUsd, FaRocket, FaIndustry } from "react-icons/fa";

const features = [
    { title: "Fund Managers", icon: <FaUserTie size={30} />, position: "left" },
    { title: "Asset Management Companies", icon: <FaBuilding size={30} />, position: "left" },
    { title: "Merchant Bankers", icon: <FaHandHoldingUsd size={30} />, position: "left" },
    { title: "Startups", icon: <FaRocket size={30} />, position: "right" },
    { title: "Custodian and Fund Administrators", icon: <FaShieldAlt size={30} />, position: "right" },
    { title: "MSME & SMEs", icon: <FaIndustry size={30} />, position: "right" },
];

const Features = () => {
    return ( 
        <div className=" flex flex-col items-center justify-center">
            <div className="z-10 py-36 px-1 lg:px-0 flex flex-col md:flex-row items-center justify-center bg-white dark:bg-darkLvl2 rounded-full lg:py-10 shadow-lg  w-full  mx-auto space-x-4 ">
                {/* Left Column */}
                <div className="flex flex-col space-y-10 w-full md:w-1/3 text-right">
                    {features
                        .filter((feature) => feature.position === "left")
                        .map((feature, index) => (
                            <div key={index} className="flex items-center lg:justify-end gap-1">
                                <div className="p-4 bg-secondary text-white rounded-full shadow-lg">
                                    {feature.icon}
                                </div>
                                <h4 className="font-bold dark:text-white text-gray-900">{feature.title}</h4>
                            </div>
                        ))}
                </div>

                {/* Center Image */}
                <div className="lg:w-2/5 flex items-center justify-center">
                    <Image
                        width={500}
                        height={500}
                        src="/images/home/circle-corporate.png"
                        alt="Expert"
                        className="rounded-full shadow-xl border-4 border-white"
                    />
                </div>

                {/* Right Column */}
                <div className="flex flex-col space-y-10 w-full md:w-1/3 text-left items-start  lg:justify-start">
                    {features
                        .filter((feature) => feature.position === "right")
                        .map((feature, index) => (
                            <div key={index} className="flex flex-row-reverse lg:flex-row items-center gap-1">
                                <h4 className=" font-bold text-gray-900 dark:text-white">{feature.title}</h4>
                                <div className="p-4 bg-secondary text-white rounded-full shadow-lg">
                                    {feature.icon}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
