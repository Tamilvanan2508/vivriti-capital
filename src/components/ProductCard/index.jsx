import React from "react";
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
          ♥
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
            <svg
              key={index}
              className={`w-5 h-5 ${
                index < Math.floor(product.rating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.384-.768 1.617-.768 2.002 0l1.868 3.745a1.2 1.2 0 00.9.657l4.131.6a1.34 1.34 0 01.743 2.287l-2.992 2.917a1.2 1.2 0 00-.345 1.063l.705 4.117a1.34 1.34 0 01-1.947 1.414L10 15.434l-3.7 1.944a1.34 1.34 0 01-1.947-1.414l.705-4.117a1.2 1.2 0 00-.345-1.063L2.72 9.516a1.34 1.34 0 01.743-2.287l4.131-.6a1.2 1.2 0 00.9-.657l1.868-3.745z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
