import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      i === currentPage ||
      i === currentPage - 1 ||
      i === currentPage + 1
    ) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="flex justify-center items-center space-x-1">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`px-3 py-1 text-xs border ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed border-gray-300"
            : "bg-gray-700 text-white hover:bg-gray-600 border-gray-300"
        } sm:px-4 sm:py-2 sm:text-base`}
      >
        {"<"}
      </button>
      {pageNumbers.map((number, index) => {
        const previousNumber = pageNumbers[index - 1];
        return (
          <React.Fragment key={number}>
            {previousNumber && number - previousNumber > 1 && (
              <span className="px-3 py-1 text-xs text-gray-600 bg-white border border-gray-300 sm:px-4 sm:py-2 sm:text-base">
                ...
              </span>
            )}
            <button
              onClick={() => onPageChange(number)}
              className={`px-3 py-1 text-xs border ${
                currentPage === number
                  ? "bg-gray-700 text-white"
                  : "text-gray-600 bg-white hover:bg-gray-600 hover:text-white border-gray-300"
              } sm:px-4 sm:py-2 sm:text-base`}
            >
              {number}
            </button>
          </React.Fragment>
        );
      })}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`px-3 py-1 text-xs border ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed border-gray-300"
            : "bg-gray-700 text-white hover:bg-gray-600 border-gray-300"
        } sm:px-4 sm:py-2 sm:text-base`}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
