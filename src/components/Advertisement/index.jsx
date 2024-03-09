import React from "react";

const Advertisement = () => {
  return (
    <div className="bg-gradient-to-r from-black to-red-600 rounded-lg p-5 text-white flex flex-col justify-between w-full">
      <h1 className="text-xl font-bold text-left">Lorem Ipsum</h1>
      <p className="my-4 text-left text-gray-300">
        Slash Sales begins in June. Get up to 80% Discount on all products
        <a href="/" className="text-white ml-2">
          Read More
        </a>
      </p>
    </div>
  );
};

export default Advertisement;
