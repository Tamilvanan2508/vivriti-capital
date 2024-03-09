import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center my-3">
      <div className="w-8 h-8 border-4 border-gray-500 border-dotted rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
