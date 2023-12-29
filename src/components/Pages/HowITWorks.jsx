import React from "react";
//import Logo from "../../data/React-Logo.jpg";
import {
  FigmaLogoIcon,
  FramerLogoIcon,
  NotionLogoIcon,
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const LOGOS = [
  <FigmaLogoIcon width={64} height={64} className="text-slate-800" />,
  <FramerLogoIcon width={64} height={64} className="text-slate-800" />,
  <NotionLogoIcon width={64} height={64} className="text-slate-800" />,
  <DiscordLogoIcon width={64} height={64} className="text-slate-800" />,
  <InstagramLogoIcon width={64} height={64} className="text-slate-800" />,
  <LinkedInLogoIcon width={64} height={64} className="text-slate-800" />,
];

const HowITWorks = () => {
  return (
    <div className="py-10 flex h-full relative overflow-hidden flex-col items-center justify-center w-full">
      <div className="w-full flex items-center justify-center flex-col px-6">
        {/**Content section */}
        <div className="flex flex-col justify-between mb-2 items-center ">
          <span className="text-xl font-medium text-stone-900  text-center leading-4 pb-2 tracking-wider mb-2">
            How It Works
          </span>
          <h2 className="text-center mb-4 text-4xl font-semibold leading-[1.182em]  text-stone-900 ">
            <span>Create Stunning</span>
           
            <span>Static Websites and UI elements</span>
            <span></span>
           <br />
            <span>through a seamless workflow</span>
          </h2>

          <div className="text-center font-normal text-gray-800 text-lg leading-[1.4em]">
            <span>
              Integrate an advanced developer-centric front-end design system
              that works with any workflow.
            </span>
            <br />
            <span>
              Enable seamless collaboration between designers and developers.
            </span>
            <br />
          </div>
        </div>

        {/**Infinite Logo Scroll section */}
        <div className="w-full p-[2rem]  overflow-hidden relative m-6">
          <div className="top-[50%] left-0 w-[200%] flex relative item center animate-loop-scroll hover:paused translate-y-[50%]">
            <div className="flex items-center justify-around w-[50%] flex-nowrap">
              {/**Use map for displaying client logo infiite slide (div , img, div) */}
              <div className="items-center justify-center w-[100px] p-4 flex min-w-28 space-x-10 ">
               
                {LOGOS.map((logo, index) => (
                  <div
                    className="slide flex w-[120px] p-8 items-center justify-center" loading="lazy"
                    key={index}
                  >
                    {logo}
                  </div>
                ))}
                {LOGOS.map((logo, index) => (
                  <div
                    className="slide flex w-[120px] p-8 items-center justify-center" loading="lazy"
                    key={index}
                  >
                    {logo}
                  </div>
                ))}
                {/**end of  animation logo */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowITWorks;
