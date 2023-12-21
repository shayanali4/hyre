"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logos/hyre.png";

import Profile from "../../../public/profile/user-1.jpg";
import { dashboardList } from "../../../constants/data";
import { IconBellRinging, IconMenu2 } from "@tabler/icons-react";
import ProfileDropdown from "../profileDropdown/profileDropdown";

const Dashboard = ({ main }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="flex absolute lg:fixed h-screen w-full">
      <div className="bg-primary">
        <aside
          className={`absolute lg:relative z-50 border-r-[1px] bg-primary border-hr ease-in-out duration-300 transition-width
          ${
            isDrawerOpen
              ? "w-64  overflow-x-auto"
              : `${
                  window.innerWidth < 786
                    ? "w-0 overflow-x-hidden"
                    : "w-20 overflow-x-hidden"
                }`
          }`}
        >
          <div className=" flex justify-center pt-4">
            <Link
              href="/"
              className="text-center leading-5 cursor-pointer text-black"
            >
              <Image
                className=" w-32"
                src={isDrawerOpen ? Logo : Logo}
                alt="logo"
              />
            </Link>
          </div>
          <nav>
            <ul className="bg-primary h-screen pt-8">
              {dashboardList?.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    window.innerWidth < 768 && setIsDrawerOpen(!isDrawerOpen);
                  }}
                  className=" pl-2 hover:bg-secondary hover:text-primary rounded-lg m-4 mx-6"
                >
                  <Link href={item.route || "#"}>
                    <div className="flex items-center  py-3 space-x-4">
                      <Image src={item?.icon} className=" w-6" />
                      {/* <>{item?.icon}</> */}
                      {isDrawerOpen && (
                        <>
                          {" "}
                          <p className="text-0.8 leading-5 font-normal">
                            {item.title}
                          </p>
                        </>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
      <main className="flex-grow relative w-auto overflow-y-auto md:bg-white z-40 px-6 lg:pr-12">
        {/* <main className="flex-grow relative w-auto overflow-y-auto md:bg-white z-40 px-6 lg:pr-12 "> */}
        <div className="flex justify-between w-full pt-4 pb-6 bg-white">
          <div className="flex items-center space-x-6">
            <IconMenu2
              strokeWidth={1}
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center space-x-7">
            <div className="flex cursor-pointer items-center">
              <IconBellRinging
                strokeWidth={2}
                className="text-secondary w-6 h-6"
              />
            </div>
            <div
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="cursor-pointer relative"
            >
              <Image
                src={Profile}
                alt="flag"
                className="w-9 h-9 rounded-full"
              />
              <div
                className={`absolute right-0 mt-2 z-20 bg-white rouded shadow-md opacity-${
                  isProfileOpen ? "100" : "0"
                } transform scale-${
                  isProfileOpen ? "100" : "50"
                } transition-transform duration-300`}
              >
                {isProfileOpen && <ProfileDropdown />}
              </div>
            </div>
          </div>
        </div>
        <div className="text-black min-h-screen pb-6">{main}</div>
      </main>
    </div>
  );
};

export default Dashboard;
