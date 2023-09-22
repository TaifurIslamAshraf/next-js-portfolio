import type { Metadata } from "next";

import SectionWrapper from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { styles } from "../styles";

export const metadata: Metadata = {
  title: "All Projects",
  description: "here is my all projects",
};

export interface Project {
  _id: string;
  title: string;
  image: string;
  technology: string;
  category: string;
  liveLink: string;
  gitClient?: string;
  gitServer?: string;
  body: {
    value: "";
  };
  createdOn: Date;
}

const getData = async () => {
  const res = await fetch(
    "https://drab-teal-hippo-tam.cyclic.app/api/portfolio",
    {
      cache: "no-store",
    }
  );
  return res.json();
};

const ProjectsPage = async () => {
  const portfolio = await getData();
  return (
    <div className={`${styles.paddingY} text-white-100 sm:pt-32`}>
      <SectionWrapper>
        <div className="text-center">
          <p className={`${styles.sectionSubText}`}>
            PROJECTS WITH THE LATEST FRAMEWORKS
          </p>
          <h1 className={`${styles.sectionHeadText}`}>Projects.</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-7 md:space-y-0 place-items-center mt-10 sm:mb-0 mb-14">
          {portfolio.allPortfolio?.map((item: Project) => {
            return <ProjectCard key={item._id} data={item} />;
          })}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ProjectsPage;
