"use client";
import React, { useContext } from "react";
import MainHeader from "./MainHeader";
import { IoIosHome } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa";
import { SiSinglestore } from "react-icons/si";
import { FcAbout } from "react-icons/fc";

import { MdPermContactCalendar } from "react-icons/md";
import Link from "next/link";
import { MenuContext } from "@/Context/MenuContext";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { open } = useContext(MenuContext);

  return (
    <div className="bg-gray-300 w-screen min-h-screen ">
      <MainHeader />
      <div className="flex justify-start items-start ">
        {/* <aside className="bg-white rounded-lg w-60 p-4 "> */}
        <aside
          className={`bg-white rounded-lg overflow-hidden transition-all duration-200 ${
            open ? "w-60 p-4" : "w-0"
          } lg:w-60 lg:p-4 `}
        >
          <ul>
            <li className="flex items-center justify-start hover:bg-orange-200 hover:text-blue-800 rounded-xl p-2">
              <IoIosHome className="mr-2" /> <Link href={"/"}>Home</Link>
            </li>
            <li className="flex items-center justify-start hover:bg-orange-200 hover:text-blue-800 rounded-xl p-2">
              <GrProjects className="mr-2" />{" "}
              <h3 className="flex-1">Projects</h3>
              <FaAngleRight />
            </li>
            <li className="flex flex-col items-center justify-start hover:bg-orange-200 hover:text-blue-800 rounded-xl p-2">
              <div className="flex flex-row justify-start items-center w-full">
                <FaCheckCircle className="mr-2" />{" "}
                <h3 className="flex-1">Singulular</h3>
                <FaAngleRight />
              </div>
              <ul className="ml-8 mt-4">
                <li className="flex justify-start items-center gap-4">
                  <SiSinglestore />
                  <Link href={"singular/selectbox"}>Select Box</Link>
                </li>
              </ul>
            </li>
            <li className="flex items-center justify-start hover:bg-orange-200 hover:text-blue-800 rounded-xl p-2">
              <FaCheckDouble className="mr-2" />{" "}
              <h3 className="flex-1">Complex</h3>
              <FaAngleRight />
            </li>
            <li className="flex items-center justify-start hover:bg-orange-200 hover:text-blue-800 rounded-xl p-2">
              <FcAbout className="mr-2" /> <Link href={"/about"}>About</Link>
            </li>
            <li className="flex items-center justify-start hover:bg-orange-200 hover:text-blue-800 rounded-xl p-2">
              <MdPermContactCalendar className="mr-2" />{" "}
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
