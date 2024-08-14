"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { AiFillHome, AiFillInfoCircle, AiFillProject } from "react-icons/ai";
import { MdContactPage } from "react-icons/md";

const navlink = [
  {
    path: "/",
    label: "Home",
    targetSegment: null,
    icon: <AiFillHome size={25} />,
  },
  {
    path: "#about",
    label: "About",
    targetSegment: "about",
    icon: <AiFillInfoCircle size={25} />,
  },

  {
    path: "/projects",
    label: "Projects",
    targetSegment: "projects",
    icon: <AiFillProject size={25} />,
  },
  {
    path: "#contact",
    label: "Contact",
    targetSegment: "contact",
    icon: <MdContactPage size={25} />,
  },
];

const Navbar = () => {
  const activeSegment = useSelectedLayoutSegment();
  return (
    <div
      className="
    fixed sm:top-4 bottom-0
    bg-gradient-to-r from-slate-600 to-slate-900
    shadow-lg
    rounded-lg
    sm:max-w-2xl
    max-w-xl
    left-0 right-0
    mx-auto
    px-8
    py-5
    flex
    items-center
    h-16
    sm:justify-between
    justify-center
    z-10
  "
    >
      <div className="font-bold text-xl text-white-100 hidden sm:block">
        <Link href={"/"}>Taifur Dev</Link>
      </div>
      <div className="space-x-10 font-semibold text-white-100 flex">
        {navlink?.map((value, index) => {
          return (
            <div key={index}>
              <Link
                className={` ${
                  activeSegment === value.targetSegment
                    ? "border-b-2 border-white text-secondary"
                    : ""
                } hover:text-blue-500 hidden sm:block`}
                href={value.path}
              >
                {value.label}
              </Link>
              <Link
                className={` ${
                  activeSegment === value.targetSegment
                    ? "border-b-2 border-white text-secondary"
                    : ""
                } hover:text-blue-500 sm:hidden text-center`}
                href={value.path}
              >
                {value.icon}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
