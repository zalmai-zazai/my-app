"use client";
import React, { useState } from "react";

import { BsChevronExpand } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

const states: string[] = [
  "Texas",
  "Calfornia",
  "Wasghinton",
  "Michigan",
  "Florida",
];

const CustomSelectBox = () => {
  const [selectedState, setSelectedState] = useState("Calfornia");
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-gray-100 flex flex-col z-30 justify-center items-center relative w-fit">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="flex flex-row items-center justify-between gap-4 bg-white w-48 my-2 p-2 rounded-lg cursor-pointer"
        >
          <span className="bg-white">{selectedState}</span>
          <BsChevronExpand className="text-gray-400" />
        </div>
        <div
          className={`flex flex-col bg-white w-48 my-2 rounded-lg ${
            open ? "opacity-100 h-auto" : "opacity-0 h-0"
          } transition-all duration-200 overflow-hidden absolute top-16 left-0`}
        >
          {states.map((state) => {
            return (
              <div
                onClick={() => {
                  setSelectedState(state);
                  setOpen(false);
                }}
                className={`flex justify-start items-center gap-x-2 px-2 py-1 hover:bg-orange-100 cursor-pointer ${
                  selectedState === state ? "bg-orange-100" : ""
                }`}
                key={state}
              >
                <AiOutlineCheck
                  className={`text-orange-500 ${
                    selectedState === state ? "opacity-100" : "opacity-0"
                  }`}
                />
                <span>{state}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`bg-gray-50 fixed inset-0 opacity-50 z-0 ${
          open ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default CustomSelectBox;
