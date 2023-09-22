import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string | undefined;
}

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return (
    <div className="max-w-7xl mx-auto lg:px-15 md:px-10 sm:px-2 px-4 w-full overflow-x-hidden">
      {children}
    </div>
  );
};

export default SectionWrapper;
