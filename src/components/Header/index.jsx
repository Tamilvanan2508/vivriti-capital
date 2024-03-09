import React from "react";
import SearchInput from "../SearchInput";
import { headerLinks } from "../../static";

const Header = () => {
  return (
    <header className="bg-white p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-4 md:mb-0 md:mr-4">
        <span className="text-pink-500 font-bold">M</span>
        <span className="text-gray-800 font-bold">oBoo</span>
        <span className="text-pink-500 font-bold">M</span>
      </div>
      <div className="flex-1 flex flex-col md:flex-row items-center justify-end">
        <SearchInput />
        <div className="flex items-center justify-end">
          {headerLinks.map((link, index) => (
            <a key={index} href={link} className="text-gray-800 mr-4">
              {link}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
