import { styles } from "@/app/styles";
import SectionWrapper from "../Container";
import TextAnimation from "../TextAnim/TextAnimation";
import Cube from "../cube-animation/Cube";

const About = () => {
  return (
    <div className={`${styles.paddingY}`}>
      <SectionWrapper>
        <div className="text-center lg:text-left">
          <h1 className={`${styles.sectionSubText}`}>INTRODUCTION</h1>
          <TextAnimation
            text="Overview."
            classes={`${styles.sectionHeadText}`}
          />
        </div>
        <div className={`lg:flex`}>
          <div className="flex-1">
            <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] ">
              As a highly driven and skilled web developer, I&apos;m passionate
              about crafting captivating and user-friendly web applications.
              <br />
              My background is strong, covering HTML, CSS, JavaScript, React,
              Next.js, Bootstrap, Tailwind, Redux, Redux Toolkit, SASS, Node.js,
              Express.js, MongoDB, MySQL, and PostgreSQL.
              <br />
              With attention to detail and problem-solving abilities, I&apos;m
              confident in delivering top-notch projects on time. I&apos;m
              always eager to learn new technologies and stay updated with
              industry trends. Let&apos;s create exceptional web experiences
              together!
            </p>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1ACkQAuLQJIatCcC5DbcbtIiE7y73vMMu/view"
              className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group mt-5"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-secondary rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">Download CV</span>
            </a>
          </div>
          <div className="about-anim flex-1 lg:block hidden">
            <Cube />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
