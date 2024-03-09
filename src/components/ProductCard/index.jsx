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
    <div className="max-w-sm bg-white rounded-lg overflow-hidden border shadow hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <LazyImage
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-[20rem]"
        />
        <button className="absolute top-2.5 right-2.5 p-2 text-white bg-gray-500 hover:bg-gray-600 transition-colors duration-300">
          <AiOutlineHeart />
        </button>
      </div>
      <div className="px-5 py-3">
        <h5 className="text-gray-900 font-bold mb-2 text-left">
          {product.title}
        </h5>
        <p className="text-gray-700 text-base mb-2 overflow-hidden text-ellipsis line-clamp-2 text-left">
          {product.description}
        </p>{" "}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-gray-900 font-bold text-xl">
              ${discountedPrice}
            </span>
            <span className="line-through text-gray-400 text-sm ml-2">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="flex items-center mt-2.5">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              className={`w-5 h-5 ${
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
