import React from "react";
import { FiX } from "react-icons/fi";
import { useSearch } from "../../context/SearchContext";

const SearchInput = ({ placeholder = "Search..." }) => {
  const { searchValue, setSearchValue } = useSearch();

  const handleChange = (e) => {
    if (e.target.value) {
      setSearchValue(e.target.value);
    } else {
      setSearchValue(null);
    }
  };

  const handleClear = () => setSearchValue(null);

  return (
    <div className="relative w-full md:w-auto mb-4 md:mb-0 md:mr-4 flex-shrink-0">
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue || ""}
        onChange={handleChange}
        className="bg-white text-gray-800 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 w-full md:w-3/4 min-w-[300px]"
      />
      {searchValue && (
        <div className="absolute top-1/2 right-2 -mt-2">
          <FiX className="text-gray-400 cursor-pointer" onClick={handleClear} />
        </div>
      )}
    </div>
  );
};

export default SearchInput;
