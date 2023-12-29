import React from "react";
import AboutImage from "../../data/About-image.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCaretRight } from "react-icons/fa";
import { AboutContent } from "../../data/about-data";

const About = () => {
  return (
    <div className="pt-20 flex h-full relative flex-col overflow-hidden w-full items-center justify-center 
    bg-[linear-gradient(to right, #eeeef2, #eeeff3, #eef1f4, #eff2f5, #eff3f6)]">
      <div className="flex items-start flex-col w-full justify-center px-6 ">
        <div className="text-center relative mb-12 mx-auto px-6 max-w-[756px]">
          <h2 className="mt-0 mb-4 text-4xl text-stone-900  font-semibold leading-[1.182em] text-center">
            Fritado marketers love our platform
            <span>
              <br />
            </span>
          </h2>
          <p className="max-w-[603px] mx-auto font-normal text-gray-800 text-lg leading-[1.4em] mb-5 mt-0 block">
            Don't just take our word for it. We are proud to share our
            customer's actual experience of our platform and how they are blown
            away.
          </p>
        </div>
        <header className="w-full flex items-start flex-row">
          {/**left - Image section */}
          <div className="w-[55%] h-max visible flex relative items-start flex-col pt-[55%]">
            <img
              src={AboutImage}
              alt="about-image"
              className="left-auto right-0 top-0 w-[100%] h-[65%] absolute max-w-[1500px] 
              object-contain opacity-100 visible block"
            />
          </div>

          {/**right - description section */}
          <div className="flex min-w-[36%] items-start pl-12 flex-col">
            <div className="w-[100%] flex items-start flex-col">
              {/**dec-1 */}
              {AboutContent.map((data) => (
                <div className="py-6 bg-[] flex w-full cursor-pointer items-start flex-col border-radius-[]  px-2 mb-3">
                  <div className="justify-start flex flex-row items-center w-[100%]">
                    <span className="ml-0 mr-6 min-w-6 min-h-6">
                      <IoMdArrowDropdown size={24} />
                    </span>
                    <span className="text-xl font-semibold text-stone-900  leading-6 font-sans text-black">
                      {data?.title}
                    </span>
                  </div>
                  <div className="flex flex-col overflow-hidden items-start max-h-max text-justify">
                    <span className="mt-2 pl-12 text-gray-800">
                      <span className="text-base ">
                        {data?.info}
                        <span> </span>
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default About;
