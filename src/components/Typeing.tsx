"use client";

import { TypeAnimation } from "react-type-animation";

const Typeing = () => {
  return (
    <TypeAnimation
      sequence={[
        "Frontend web developer",
        1000,
        "Mern stack web developer",
        1000,
        "React js | Next js developer",
        1000,
        "JavaScript developer",
        1000,
      ]}
      preRenderFirstString={true}
      speed={50}
      repeat={Infinity}
      className={`text-[#dfd9ff] font-medium lg:text-[30px] md:text-[25px] sm:text-[25px] text-[20px]`}
    />
  );
};

export default Typeing;
