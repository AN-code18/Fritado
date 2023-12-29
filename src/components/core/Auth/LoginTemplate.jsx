import React from "react";
import SignUpForm from "./SignUpForm";

const LoginTemplate = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto gap-y-12 md:flex-row md:gap-y-0 md:gap-x-12 ">
      <div className="mx-auto md:mx-0">
        <SignUpForm />

        <div className="mt-20">
          <p className="text-[#6f94b3] font-semibold">
            By creating an account you agree to our{" "}
            <span className="text-[#2f5c83]">Terms & Conditions</span> and
            <span className="text-[#2f5c83]"> Privacy agreement</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginTemplate;
