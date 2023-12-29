import React from "react";
import * as Icon1 from "react-icons/bi";
import * as Icon3 from "react-icons/hi2";
import * as Icon2 from "react-icons/io5";
import * as Icon4 from "react-icons/io5";

const contactDetails = [
  {
    icon: "IoLocation",
    heading: "Address",
    description1: "Fritado Technologies Private Limited",
    description2: "No.1983, South end, D Street Road, Jayanagara 9th Block, Bengaluru, Karnataka 560069",
    details:
      "",
  },

  {
    icon: "IoCall",
    heading: "Call us",
    description1: "Mon - Fri From 10am to 6pm",
    description2: "",
    details: "+91 97411 56389",
  },
  {
    icon: "IoMail",
    heading: "Email",
    description1: "support@fritado.com",
    description2: "",
    details: "",
  },
  {
    icon: "HiClock",
    heading: "Working Hours",
    description1: "Mon - Fri  From 8:00 AM - 5:00 PM",
    description2: "",
    details: "",
  },
  
];

const ContactDetails = () => {
  return (
    <div
      className="flex flex-col lg:p--6 p-4 "
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      }}
    >
      {contactDetails.map((ele, i) => {
        let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon];
        return (
          <div key={i} className="text-justify flex flex-row gap-[2px] p-4">
            <div>
              {" "}
              <Icon size={26}  />
            </div>
            <div className="flex flex-col ml-3 gap-2 ">
              <h1 className="text-xl font-semibold text-stone-900 pb-1">
                {ele.heading}
              </h1>
              <div className="text-justify">
                <p className="font-semibold text-justify text-xl text-gray-800  pb-1">
                  {ele?.description1}
                </p>
                <p className="font- text-base  text-gray-800  pb-1">
                  {ele?.description2}
                </p>
                <p className="font-text-base text-gray-800 pb-1">
                  {ele?.details}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactDetails;
