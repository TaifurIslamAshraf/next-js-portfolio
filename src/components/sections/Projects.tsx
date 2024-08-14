import { styles } from "@/app/styles";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "../Container";

import { BsArrowRight } from "react-icons/bs";
import TextAnimation from "../TextAnim/TextAnimation";

interface Project {
  _id: string;
  title: string;
  image: string;
  technology: string;
  category: string;
  liveLink: string;
  gitClient?: string;
  gitServer?: string;
  body: object;
  createdOn: Date;
}

const getProject = async () => {
  const res = await fetch(
    "https://myportfolioserver-production-a8fd.up.railway.app/api/portfolio",
    { cache: "no-cache" }
  );

  return res.json();
};

const Projects = async () => {
  const projects = await getProject();

  return (
    <div className={`${styles.paddingY}  bg-black-100`}>
      <SectionWrapper>
        <div className="head">
          <p className={`${styles.sectionSubText} text-center uppercase`}>
            Projects with the Latest Frameworks
          </p>
          <TextAnimation
            text="Projects."
            classes={`${styles.sectionHeadText} text-center`}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-7 lg:space-y-0 place-items-center mt-10">
          {projects.allPortfolio?.slice(0, 3).map((item: Project) => {
            return (
              <div
                key={item._id}
                className="bg-tertiary rounded-md shadow-lg hover:translate-y-[-5px] transition-all duration-500  xs:max-w-[350px] max-w-[300px] p-3 h-[300px]"
              >
                <Image
                  src={item.image}
                  alt="project images"
                  width={330}
                  height={200}
                  className="object-contain"
                  loading="lazy"
                />
                <div className="py-5">
                  <h1 className="mt-1">{item.title}</h1>
                  <Link
                    className="group flex items-center hover:text-secondary mt-3"
                    href={item.liveLink}
                    target="_blank"
                  >
                    Live Link{" "}
                    <BsArrowRight className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 mx-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <Link
            href="/projects"
            className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group mt-10"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-secondary rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative uppercase">See All Projects</span>
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Projects;
