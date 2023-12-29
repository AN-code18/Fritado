import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../common/Button";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errros, isSubmitSuccessfull },
  } = useForm();
  return (
    <form
      // onSubmit={handleSubmit(submitContactForm)}
      className="w-full flex flex-col gap-5"
    >
      <div className="flex flex-col gap-6 lg:flex-row">
        {/*firstname */}
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label
            htmlFor="firstname"
            className="text-[16px] text-stone-900 text-justify font-semibold"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter First Name"
            style={{
              boxShadow: " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
            className="p-3 text-[16px] mb-2
           leading-[20px] placeholder:text-richblack-400 "
            {...register("firstname", { required: true })}
          />
          {errros?.firstname && (
            <span className="-mt-1 text-[12px] text-gray-800">
              {" "}
              Please enter Your name
            </span>
          )}
        </div>

        {/*lastname */}
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label
            htmlFor="lastname"
            className="text-[16px]text-stone-900  text-justify font-semibold"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter Last Name"
            style={{
              boxShadow:" rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
            className=" p-3 text-[16px] mb-2
           leading-[20px] placeholder:text-richblack-400 "
            {...register("lastname")}
          />
        </div>
      </div>

      {/*email */}
      <div className="flex flex-col gap-2 ">
        <label
          htmlFor="email"
          className="text-[16px]  text-gray-800 text-justify font-semibold"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email here"
          style={{
            boxShadow: " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
          className="p-3 text-[16px] mb-2
        leading-[20px] placeholder:text-richblack-400 "
          {...register("email", { required: true })}
        />
        {errros?.email && (
          <span className="-mt-1 text-[14px] text-gray-800">
            Please enter Your email
          </span>
        )}
      </div>
      {/*phone no */}

      {/*message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-[16px] text-stone-800 text-justify font-semibold"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="7"
          placeholder="Enter Your message here"
          style={{
            boxShadow: " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
          className="p-3 text-[16px] mb-2
        leading-[20px] placeholder:text-richblack-400 "
          {...register("message", { required: true })}
        />
        {errros?.message && (
          <span className="-mt-1 text-gray-800  text-[12px]">
            Please enter Your message
          </span>
        )}
      </div>

      {/*button */}
      <div className="mt-4 self-start">
        <Button active={true} linkto="#" disabled={loading} type="submit">
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactUsForm;
