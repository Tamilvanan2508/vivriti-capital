import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import LazyImage from "../LazyImage";

const ProductCard = ({ product }) => {
  const discountedPrice = (
    (product.price * (100 - product.discountPercentage)) /
    100
  ).toFixed(2);

  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden border shadow hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative">
        <LazyImage
          src={product.thumbnail}
          alt={product.title}
          className="w-full md:h-48 !h-[12rem]"
        />
        <button className="absolute top-2 right-2 p-1 sm:p-2 text-white bg-gray-500 hover:bg-gray-600 transition-colors duration-300 text-xs sm:text-base">
          <AiOutlineHeart />
        </button>
      </div>
      <div className="md:px-4 px-2 sm:px-5 py-2 sm:py-3">
        <h5 className="text-gray-900 font-bold mb-1 sm:mb-2 text-left text-xs sm:text-lg leading-tight text-ellipsis line-clamp-1">
          {product.title}
        </h5>
        <p className="text-gray-700 text-xs sm:text-base mb-1 sm:mb-2 overflow-hidden text-ellipsis line-clamp-2 text-left leading-snug">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-gray-900 font-bold text-lg sm:text-xl">
              ${discountedPrice}
            </span>
          </div>
        </div>
        <div className="flex items-center mt-2">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              className={`w-4 h-4 sm:w-5 sm:h-5 ${
                index < Math.floor(product.rating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
