"use client";
import React, { useState } from "react";

import { FaRegUser } from "react-icons/fa";
import Link from "next/link";

const actions = [
  { id: 1, label: "User Dashboard", route: "/users/dashboard" },
  { id: 2, label: "Transactions", route: "/users/transactions" },
  { id: 3, label: "Orders", route: "/users/orders" },
  { id: 4, label: "Friends", route: "/users/friends" },
  { id: 4, label: "Log out", route: "/auth/logout" },
];

const UserAreaSelectBox = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" flex flex-col justify-center relative items-center z-30 ">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className=" p-2  cursor-pointer"
        >
          <span className=" items-center">
            <FaRegUser />
          </span>
        </div>
        <div
          className={`flex flex-col bg-blue-100 w-40 my-2 rounded-lg ${
            open ? "opacity-100 h-auto" : "opacity-0 h-0"
          } transition-all duration-200 overflow-hidden absolute top-12 right-0 `}
        >
          {actions.map((item) => {
            return (
              <div
                onClick={() => {
                  setOpen(false);
                }}
                className={`flex justify-center items-center px-2 py-1 hover:bg-orange-100 cursor-pointer `}
                key={item.id}
              >
                <Link href={item.route}>{item.label}</Link>
              </div>
            );
          })}
        </div>
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`bg-gray-100 fixed inset-0 opacity-50 z-0 ${
          open ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default UserAreaSelectBox;
