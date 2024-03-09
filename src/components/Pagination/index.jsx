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
        className={`px-4 py-2 border ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed border-gray-300"
            : "bg-gray-700 text-white hover:bg-gray-600 border-gray-300"
        }`}
      >
        Prev
      </button>
      {pageNumbers.map((number, index) => {
        const previousNumber = pageNumbers[index - 1];
        return (
          <React.Fragment key={number}>
            {previousNumber && number - previousNumber > 1 && (
              <span className="px-4 py-2 text-gray-600 bg-white border border-gray-300">
                ...
              </span>
            )}
            <button
              onClick={() => onPageChange(number)}
              className={`px-4 py-2 border ${
                currentPage === number
                  ? "bg-gray-700 text-white"
                  : "text-gray-600 bg-white hover:bg-gray-600 hover:text-white border-gray-300"
              }`}
            >
              {number}
            </button>
          </React.Fragment>
        );
      })}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`px-4 py-2 border ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed border-gray-300"
            : "bg-gray-700 text-white hover:bg-gray-600 border-gray-300"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
