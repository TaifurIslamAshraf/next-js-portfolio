import { styles } from "@/app/styles";
import { mySkills } from "@/constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import SectionWrapper from "../Container";
import TextAnimation from "../TextAnim/TextAnimation";

const Skills = () => {
  return (
    <div className={`${styles.paddingY}`}>
      <SectionWrapper>
        <h1 className={`${styles.sectionSubText} text-center uppercase`}>
          Tech Enthusiast and Continuous Learner
        </h1>
        <TextAnimation
          text="Skills."
          classes={`${styles.sectionHeadText} text-center`}
        />

        <div className="mt-10">
          <Marquee direction="left" autoFill speed={80}>
            {mySkills.map((item) => {
              const borderColorStyle = {
                borderColor: item.color,
              };

              return (
                <div
                  key={item.name}
                  className={`shadow-2xl p-5 bg-black-200/50 mx-5 border-b-2 w-[150px] text-center`}
                  style={borderColorStyle}
                >
                  <Image
                    className="m-auto block"
                    src={item.icon}
                    alt="skill icon"
                    width={50}
                  />
                  <h3>{item.name}</h3>
                </div>
              );
            })}
          </Marquee>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Skills;
