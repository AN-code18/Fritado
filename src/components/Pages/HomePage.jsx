import React from "react";
import background from "../../data/HomePage.jpg";
import Button from "../common/Button";
import { SocialLinksArray } from "../../data/navbar-link";
import About from "./About";
import Footer from "../common/Footer";
import HowITWorks from "./HowITWorks";

const HomePage = () => {
  return (
    <div className="w-full">
      <div
        style={{ backgroundImage: `url(${background}) ` }}
        className="relative max-w-maxContent h-screen mx-auto bg-cover bg-no-repeat bg-center bg-fixed  text-center
        
          "
      >
        <div
          className="px-[90px] mx-auto overflow-hidden h-full flex flex-col 
         relative  max-w-[970px]
         items-center justify-center text-center"
        >
          <p className="block mb-[-20px] mt-[2px] mr-0 text-2xl font-semibold text-[#2f5c83]">
            The #1 AI Writer for Fritado
          </p>
          <h1 className="mt-5 text-6xl font-bold mb-6 ">
            Generate content that actually ranks using AI
          </h1>
          <p className="mb-10 text-xl mx-auto font-semibold">
            Keyword research. Content generation. Fritado optimization. All done
            by AI.
          </p>

          {/**Buttons */}
          <div className="items-center justify-center mt-14 ">
            <Button linkto={"/"} active={true}>View More</Button>
          </div>
        </div>

        <div>
          <div className="absolute float-right right-[20px] top-[40%] flex flex-col">
            <ul className="pl-0 mb-0">
              {SocialLinksArray.map(({ id, child, href }) => (
                <li key={id} className="">
                  <a
                    href={href}
                    className="child-icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="child">{child} </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/**Other section will go here */}
      </div>

      <About />
      <HowITWorks />
    
    </div>
  );
};

export default HomePage;
