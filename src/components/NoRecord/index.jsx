import React from "react";
import { FaRegSadTear } from "react-icons/fa";

const NoRecord = () => {
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <FaRegSadTear className="text-gray-500 text-4xl mb-4" />
      <p className="text-center text-gray-500">No data available</p>
    </div>
  );
};

export default NoRecord;
