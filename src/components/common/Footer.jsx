import React from "react";
import { NavbarLinks } from "../../data/navbar-link";
import { Link } from "react-router-dom";
import Logo from "../../data/Logo.jpeg.jpg";

const Footer = () => {
  const column2 = [
    "Get a FREE demo",
    "Features",
    "Sign in",
    "Free AI SEO Tools",
    "AI Content Detector",
  ];
  const column3 = [
    "Google SERP Checker",
    "Paragraph Rewriter",
    "Keyword Rank Checker",
    "SEO Keyword Tool (AI)",
    "FAQ & Glossary for SEO",
  ];
  return (
    <div className="pt-28 pb-9 border-solid border-t-[1px] #302c3f bg-[#23202e]">
      {/**BreakPoint */}
      <div className="px-6 mx-auto max-w-[1246px]">
        <div className="justify-between mb-[110px] flex font-sans font-medium leading-7 text-lg">
          {/**section -1 */}
          <div className="w-full justify-between flex mr-5 max-w-[686px]">
            <div className="mr-5 w-full max-w-[434px]">
              <div className=" text-white mb-7 font-bold leading-4 text-xl justify-start flex">
                Pages
              </div>
              <div className="justify-between flex">
                <ul className="pl-0 ml-0 mb-0 mr-5">
                  {NavbarLinks.map((link, index) => (
                    <li
                      key={index}
                      className=" text-[#79778a] justify-start flex leading-[1.11em] mb-4 font-normal font-sans"
                    >
                      <Link to={link?.path}>
                        <p className="text-[#b7b4c7] tracking-widest ">
                          {link.title}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>

                <ul className="pl-0 ml-0 mb-0 mr-0">
                  {column2.map((ele, index) => (
                    <li
                      key={index}
                      className=" text-[#79778a] justify-start flex leading-[1.11em] mb-4 font-normal font-sans"
                    >
                      <p className="text-[#b7b4c7] tracking-widest ">{ele}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mr-0 w-auto ">
              <div className="mb-7 text-xl font-bold leading-4 flex text-white">
                Free Tools
              </div>
              <div className="justify-between flex">
                <ul className="pl-0 ml-0 mb-0 mr-0">
                  {column3.map((ele, index) => (
                    <li
                      key={index}
                      className="text-[#79778a] justify-start flex leading-[1.11em] mb-4 mr-0 font-normal font-sans"
                    >
                      <p className="text-[#b7b4c7]">{ele}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/**section-2 */}
          <div className="max-w-[402px]">
            <div className="mb-7 text-white text-xl font-bold leading-4 flex">
              Subscribe to our newsletter
            </div>
            <p className="text-[#b7b4c7] mb-7 font-normal font-sans text-justify ">
              Stay up to date on the latest trends in AI writing and SEO as well
              as tips and tricks on how to improve your automated writing and
              SEO skills.
            </p>
            {/**2 buttons will go here */}
            <div></div>
          </div>
        </div>

        <div className="flex-wrap justify-between items-center mb-[-15px] pt-9 flex border-[#302c3f] border-solid border-t-[1px]">
          <Link
            to=""
            className="mb-4 mr-8  max-w-full inline-block cursor-pointer"
          >
            <img
              src={Logo}
              alt="footer-logo"
              className="w-20 max-w-full inline-block align-middle"
            />
          </Link>
          <div className="mb-4 text-[#b7b4c7]">
            Copyright © Fritado Technologies | 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
