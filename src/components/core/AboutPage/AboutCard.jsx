import React from "react";
import { CardData } from "../../../data/about-data";

const AboutCard = () => {
  return (
    <>
      {CardData.map((ele, id) => (
        <div className="max-w-[1218px] items-stretch justify-center w-full flex flex-row  my-5 pb-12">
          <div className="flex w-[24%] p-9 min-w-[270px] items-start flex-col border-2 border-black rounded-lg">
            <span className="text-2xl font-bold leading-[26px] text-stone-900  mb-3">
              Import
            </span>
            <span className="text-base mb-4 leading-[24px] text-gray-800 text-justify font-medium">
            Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.
            </span>
          </div>
          
        </div>
      ))}
    </>
  );
};

export default AboutCard;
