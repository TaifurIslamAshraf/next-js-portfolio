import "./TextAnimation.css";

interface TextAnimationProps {
  text: string;
  classes: string;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ text, classes }) => {
  return <h1 className={`animate-text ${classes}`}>{text}</h1>;
};

export default TextAnimation;
