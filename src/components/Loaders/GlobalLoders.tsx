"use client";

import { ClipLoader } from "react-spinners";

const GlobalLoders = () => {
  return (
    <div className="bg-black-100 w-screen h-screen flex items-center justify-center">
      <ClipLoader
        color={"#38d6ac"}
        loading={true}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default GlobalLoders;
