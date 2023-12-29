import React from "react";
import Template from "../common/Template";
import Footer from "../common/Footer";
import AboutCard from "../core/AboutPage/AboutCard";
import FoundingStory from "../../data/FoundingStory.png";
import { TeamsData } from "../../data/about-data";

const AboutPage = () => {
  return (
    <div className="">
      <Template />

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex flex-col gap-10 lg:w-[50%]">
              <h1 className="text-stone-900 text-4xl font-semibold lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-gray-800 lg:w-[95%]">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-base font-medium text-gray-800 lg:w-[95%]">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>

            <div>
              <img src={FoundingStory} alt="FoundingImage" className="" />
            </div>
          </div>

          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            {/*left box*/}
            <div className="my-24 flex flex-col gap-10 lg:w-[40%]">
              <h1 className="text-stone-900 text-4xl font-semibold lg:w-[70%]  ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-gray-800 lg:w-[95%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>

            {/*right box*/}
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="text-stone-900  text-4xl font-semibold lg:w-[70%]  ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-gray-800 lg:w-[95%]">
                Our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-16 pb-28 flex relative flex-col h-full item-center justif-center w-full ">
        <div className="flex w-full items-center flex-row justify-center">
          <AboutCard />
        </div>
      </div>
      {/**section -3 */}
      <div className="pb-24 pt-25">
        <div className="mx-auto w-full  max-w-[1250px]">
          <div className="text-center text-xl font-medium  text-stone-900 leading-4 mb-11">
            <span className="tracking-wider">Expert People</span>
            <h2 className="text-4xl font-semibold leading-[1.182em] text-stone-900 mt-3 mb-4">
              Global leadership team
            </h2>
            <p className="max-w-[570px] m-auto text-center font-normal text-gray-800 text-lg leading-[1.4em]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-wrap">
            {TeamsData.map((ele) => (
              <div className="flex max-w-[100%]  mx-auto" key={ele.id}>
                <div className="mb-8">
                  <div className="relative overflow-hidden">
                    <img
                      src={ele.image}
                      alt="profile-picture"
                      className="h-auto max-w-[100%] align-middle"
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-stone-900 text-xl mb-2 font-bold">{ele.Name}</h3>
                    <span className="text-lg font-medium text-gray-800">{ele.Role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default AboutPage;
