"use client";
import { MenuContext } from "@/Context/MenuContext";
import React, { useContext } from "react";

import { FaBars } from "react-icons/fa";
import UserAreaSelectBox from "./UserAreaSelectBox";
import LanguageSelectBox from "./LanguageSelectBox";

const MainHeader = () => {
  const { toggle } = useContext(MenuContext);
  return (
    <div className="bg-white flex justify-between items-center px-4 h-12 mb-4  ">
      <div>Brand</div>
      <div className="flex items-center gap-2">
        <div>
          <LanguageSelectBox />
        </div>
        <div>
          <UserAreaSelectBox />
        </div>
        {/* <div>
          <FaRegUser className="cursor-pointer" />
        </div> */}
        <div className="lg:hidden ">
          <FaBars onClick={() => toggle()} className="cursor-pointer " />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
