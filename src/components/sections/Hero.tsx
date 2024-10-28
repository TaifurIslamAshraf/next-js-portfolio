"use client";

import "animate.css";
import { useState } from "react";
import { styles } from "@/app/styles";
import SectionWrapper from "../Container";
import Typeing from "../Typeing";
import StarsCanvas from "../canvas/Stars";
import ImgBlob from "../imageBlob/ImageBlob";
import Trem from "../terminal/Term";

import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { GoTerminal } from "react-icons/go";

const Hero = () => {
  const [showTerm, setShowTerm] = useState(false);

  return (
    <div className={`sm:pt-28 text-white-100 z-1 relative ${styles.paddingY}`}>
      <div className="lg:block hidden">
        <StarsCanvas />
      </div>
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div className="animate__animated animate__fadeInDown flex items-center md:order-1 order-2 xs:space-y-0 space-y-10">
            <div className="xs:mr-14 mr-5 flex flex-col items-center justify-center gap-8">
              <Link
                href={"https://twitter.com/md_taifur55"}
                target="_blank"
                className="text-2xl rounded-full hover:translate-y-[-5px] transition-all duration-500"
              >
                <BsTwitter />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/mdtaifur/"}
                target="_blank"
                className="text-2xl rounded-full hover:translate-y-[-5px] transition-all duration-500"
              >
                <BsLinkedin />
              </Link>
              <Link
                href={"https://github.com/TaifurIslamAshraf"}
                target="_blank"
                className="text-2xl rounded-full hover:translate-y-[-5px] transition-all duration-500"
              >
                <BsGithub />
              </Link>
              <Link
                href={"mailto:Taifurislamashraf.bd@gmail.com"}
                className="text-2xl rounded-full hover:translate-y-[-5px] transition-all duration-500"
              >
                <GrMail />
              </Link>
              <button
                onClick={() => setShowTerm((prev) => !prev)}
                className="text-2xl rounded-full hover:translate-y-[-5px] transition-all duration-500"
              >
                <GoTerminal />
              </button>
            </div>
            <div className="text">
              <h1
                className={`${styles.heroHeadText} animate__animated animate__fadeInDown`}
              >
                Hello,
              </h1>
              <h2
                className={`${styles.heroHeadText} animate__animated animate__fadeInDown`}
              >
                I am Taifur
              </h2>
              <Typeing />
              <p
                className={`text-base animate__animated animate__fadeInDown mt-4`}
              >
                I am an avid learner, valuing diligence and efficacy. Embracing
                novel technologies and gaining experience invigorates me. My
                constant endeavor is to showcase my capabilities through
                conscientious work and unwavering responsibility.
              </p>
            </div>
          </div>
          <div className="m-auto md:order-2 order-1 animate__animated animate__fadeInDown">
            <ImgBlob />
          </div>
        </div>

        {showTerm && (
          <div
            className={`h-[50vh] backdrop-blur-sm bg-white/10 overflow-auto scroll-smooth scrollbar-hide my-6 rounded-md shadow-lg border-secondary border-2 animate__animated ${
              showTerm ? "animate__fadeIn" : "animate__fadeOut"
            }`}
          >
            <Trem />
          </div>
        )}
      </SectionWrapper>
    </div>
  );
};

export default Hero;
