import React from "react";
import { MdMenu } from "react-icons/md";
import SearchInput from "../SearchInput";
import { headerLinks } from "../../static";

const Header = () => {
  return (
    <header className="bg-white md:p-4 pt-4 flex flex-col md:flex-row justify-between md:items-center">
      <div className="flex items-center mb-4 md:mb-0 md:mr-4 p-2 md:shadow-none shadow-md">
        <div className="md:hidden">
          <MdMenu size={24} />
        </div>
        <div className="flex items-center justify-center flex-1">
          <span className="text-pink-500 font-bold">M</span>
          <span className="text-gray-800 font-bold">oBoo</span>
          <span className="text-pink-500 font-bold">M</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col md:flex-row items-center justify-end w-full">
        <SearchInput />
        <div className="hidden md:flex items-center justify-end">
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
