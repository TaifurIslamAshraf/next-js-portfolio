import { styles } from "@/app/styles";
import SectionWrapper from "../Container";

import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <div
      className={`${styles.paddingY} text-center sm:mb-0 mb-14  bg-black-100`}
    >
      <SectionWrapper>
        <div className="flex items-center justify-center space-x-7 mb-4">
          <Link
            href={"https://twitter.com/md_taifur55"}
            target="_blank"
            className="text-2xl bg-black-200 p-3 rounded-full hover:translate-y-[-5px] transition-all duration-500"
          >
            <BsTwitter />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/mdtaifur/"}
            target="_blank"
            className="text-2xl bg-black-200 p-3 rounded-full hover:translate-y-[-5px] transition-all duration-500"
          >
            <BsLinkedin />
          </Link>
          <Link
            href={"https://github.com/TaifurIslamAshraf"}
            target="_blank"
            className="text-2xl bg-black-200 p-3 rounded-full hover:translate-y-[-5px] transition-all duration-500"
          >
            <BsGithub />
          </Link>
          <Link
            href={"mailto:Taifurislamashraf.bd@gmail.com"}
            className="text-2xl bg-black-200 p-3 rounded-full hover:translate-y-[-5px] transition-all duration-500"
          >
            <GrMail />
          </Link>
        </div>
        <div className="copy">
          <small>&copy; Copyright by MD. Taifur</small>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Footer;
