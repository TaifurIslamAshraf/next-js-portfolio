import Image from "next/image";
import MongoDbSvg from "../../../public/mongodb.svg";
import NextjsSvg from "../../../public/next.svg";
import { FaGitAlt, FaJs, FaNode, FaReact } from "react-icons/fa";
import "./cube.css";

const Cube = () => {
  return (
    <div className="stage-cube-cont">
      <div className="cubespinner shadow-md">
        <div className="face1 backdrop-blur-sm">
          <FaJs color="#efd81d" />
        </div>

        <div className="face2 backdrop-blur-sm">
          <Image width={130} src={NextjsSvg} alt="nextImage" />
        </div>

        <div className="face3 backdrop-blur-sm">
          <FaNode color="#68A063" />
        </div>

        <div className="face4 backdrop-blur-sm">
          <FaGitAlt color="#ec4d2a" />
        </div>

        <div className="face5 backdrop-blur-sm">
          <Image src={MongoDbSvg} alt="mongodb" />
        </div>

        <div className="face6 backdrop-blur-sm">
          <FaReact color="#5ed4f4" />
        </div>
      </div>
    </div>
  );
};

export default Cube;
