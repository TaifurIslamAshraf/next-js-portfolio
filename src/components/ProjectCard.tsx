"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import { Project } from "@/app/projects/page";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsArrowRight, BsLink45Deg } from "react-icons/bs";

interface ProjectCardProps {
  data: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const closeIcon = (
    <div className="bg-[#ffffff7e] backdrop-blur-md rounded-full">
      <AiFillCloseCircle size={30} />
    </div>
  );

  return (
    <>
      <button onClick={onOpenModal}>
        <div className="bg-tertiary rounded-md shadow-lg hover:translate-y-[-5px] transition-all duration-500  xs:max-w-[450px] max-w-[300px] p-3 relative group cursor-pointer m-2">
          <Image
            src={data.image}
            alt="project images"
            width={450}
            height={200}
            className="h-[200px] object-cover"
            loading="lazy"
          />
          <div className="py-5 absolute opacity-0 bottom-3 text-black text-center backdrop-blur-md bg-[#ffffffcc] w-[calc(100%-1.5rem)] group-hover:opacity-100 transition-all duration-500 sm:block hidden">
            <h1 className="mt-1 text-[18px] font-semibold capitalize">
              {data.title}
            </h1>
            <Link
              className="group inline-block hover:text-secondary mt-1"
              href={data.liveLink}
              target="_blank"
            >
              Live Link{" "}
              <BsArrowRight className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 inline-block" />
            </Link>
          </div>
        </div>
      </button>

      <Modal open={open} onClose={onCloseModal} center closeIcon={closeIcon}>
        <Image
          src={data.image}
          className="h-[230px] m-auto"
          width={500}
          height={300}
          alt="porjects image"
        />
        <div className="my-5 space-y-2">
          <h1 className="font-semibold text-xl">{data.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.body.value }}></div>
          <div className="flex gap-3 mb-4 flex-wrap">
            {data.technology.split(",").map((item, index) => {
              return (
                <p
                  className="bg-[#aaa6c35e] p-[5px] text-xs rounded-md"
                  key={index}
                >
                  {item}
                </p>
              );
            })}
          </div>
          <div className="inline-block bg-black-100 text-secondary hover:text-white p-2 rounded-md space-x-1">
            <BsLink45Deg className="inline-block" />
            <Link href={data.liveLink} target="_blank">
              Live Link
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;
