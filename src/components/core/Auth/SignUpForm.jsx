import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Button from "../../common/Button";
import Logo2 from "../../../data/Logo.png";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { firstname, lastname, email, password, confirmPassword } = formData;

  return (
    <div className="">
      <div className="w-full px-14 mt-6 flex flex-col items-center justify-center mx-auto">
        <div className="">
          <img
            src={Logo2}
            alt="login-Logo"
            className="w-[165px] float-left mt-5 ml-3"
          />
        </div>
        <h1 className="text-2xl font-semibold text-justify text-[#2f5c83] mb-2 mt-4">
          With you every step of the way
        </h1>
        <p className=" text-[#6f94b3]">
          Whether it's your latest ssignment or your next opportunity.
          <br /> MBO Partners makes getting to work less work
        </p>
      </div>
      {/*Form */}
      <form className="w-full px-14 pb-14 pt-10 gap-y-8 flex flex-col ">
        <div className="flex flex-row gap-x-10 relative">
          <div className="flex relative h-[3rem]">
            <input
              required
              type="text"
              name="firstname"
              placeholder="First name"
              value={firstname}
              style={{
                boxShadow:
                  "0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.16), 0 8px 8px rgba(0,0,0,0.20)",
              }}
              className="w-full h-full p-[1.5rem]"
            />
          </div>
          <div className="flex relative h-[3rem]">
            <input
              required
              type="text"
              name="lastname"
              placeholder="Last name"
              value={lastname}
              style={{
                boxShadow:
                  "0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.16), 0 8px 8px rgba(0,0,0,0.20)",
              }}
              className="w-full h-full  p-[1.5rem] "
            />
          </div>
        </div>

        <div className="flex w-full relative h-[3rem]">
          <input
            required
            type="text"
            name="email"
            placeholder="Enter email address"
            value={email}
            style={{
              boxShadow:
                "0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.16), 0 8px 8px rgba(0,0,0,0.20)",
            }}
            className="h-full p-[1.5rem] w-full"
          />
        </div>

        <div className="flex w-full flex-col relative">
          <div className="flex flex-row  h-[3rem]">
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={password}
              style={{
                boxShadow:
                  "0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.16), 0 8px 8px rgba(0,0,0,0.20)",
              }}
              className="h-full p-[1.5rem] w-full
              "
            />
            <span className="absolute right-3 top-[13px] z-[10] cursor-pointer">
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={25} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={25} fill="#AFB2BF" />
              )}
            </span>
          </div>
        </div>
        <div className="flex relative mt-8 ">
          <div className="flex flex-col">
            <Button type="submit" linkto="#" active={false}>
              Create Account
            </Button>
            <p className="font-medium leading-6 mt-2 text-[#6f94b3]">
              Already have an account?{" "}
              <span className=" text-[#2f5c83]"> Click here</span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
