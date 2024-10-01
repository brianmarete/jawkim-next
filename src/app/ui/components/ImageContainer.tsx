import React from "react";

const ImageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative before:absolute before:w-full before:h-full before:-left-5 before:-top-5 before:border-8 before:border-gray-300 before:-z-10">
      {children}
    </div>
  );
};

export default ImageContainer;
