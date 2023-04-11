import React, { forwardRef, useRef, useState, useEffect } from "react";
import Section from "../components/Section";
import visibleOnScreen from "../utils/visibleOnScreen";
import { FaArrowRight } from "react-icons/fa";

const WorkExperience = forwardRef((props, ref) => {
  const isVisible = visibleOnScreen(ref);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    console.log("isVisible, WorkExperience", isVisible);
    if (isVisible) {
      props.setSelectedNavItem("Work Experience");
      setShowContent(true);
    }
  }, [isVisible]);

  return (
    <Section
      ref={ref}
      sectionStyle="bg-blue-100"
      childStyle={`${
        !showContent
          ? "blur-md transition-filter ease-in-out duration-1000 delay-100 pb-20 sm:pb-32 md:pb-40"
          : "transition-filter ease-in-out duration-1000 delay-100 pb-20 sm:pb-32 md:pb-40"
      }`}
    >
      <p className="mt-4 text-center mx-auto max-w-3xl text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
        I currently live in Cincinnati, Ohio, and am not actively searching for
        work. I'm always open to new opportunties, feel free to reach out.
      </p>
      <div className="relative mt-8 mx-auto max-w-7xl">
        <div className="max-w-5xl mx-auto mb-2">
          <p className="w-fit text-sm font-mono">shortened resume</p>
        </div>
        <ul className="mb-8 max-w-5xl mx-auto py-4 px-4 sm:py-6 md:px-8 sm:px-6 md:px-8 grid sm:grid-cols-1 gap-8 lg:grid-cols-4 lg:items-center bg-blue-200 rounded-lg">
          <li className="text-center text-slate-900">
            <h2 className="font-semibold">Wridz</h2>
            <p className="">Lead Front-End Developer</p>
            <span className="flex justify-center items-center gap-1">
              Apr 2022 <FaArrowRight size=".75rem" /> Present
            </span>
          </li>
          <li className="text-center text-slate-900">
            <h2 className="font-semibold">Premier Art Destination</h2>
            <p className="">Freelance Work</p>
            <span className="flex justify-center items-center gap-1">
              Oct 2021 <FaArrowRight size=".75rem" /> Present
            </span>
          </li>
          <li className="text-center text-slate-900">
            <h2 className="font-semibold">Scoopt</h2>
            <p className="">Co-founder | Lead Developer</p>
            <span className="flex justify-center items-center gap-1">
              Oct 2019 <FaArrowRight size=".75rem" /> Aug 2021
            </span>
          </li>
          {/* <li className="text-center text-slate-900">
            <h2 className="font-semibold">CIMx Software</h2>
            <p className="">Junior Developer Co-op</p>
            <span className="flex justify-center items-center gap-1">
              Jan 2019 <FaArrowRight size=".75rem" /> Aug 2019
            </span>
            <span className="flex justify-center items-center gap-1">
              Jan 2020 <FaArrowRight size=".75rem" /> June 2020
            </span>
          </li> */}
          <li className="text-center text-slate-900">
            <h2 className="font-semibold">University of Cincinnati</h2>
            <p className="">BS Computer Science</p>
            <span className="flex justify-center items-center gap-1">
              2016 <FaArrowRight size=".75rem" /> 2021
            </span>
          </li>
        </ul>
      </div>
    </Section>
  );
});

export default WorkExperience;
