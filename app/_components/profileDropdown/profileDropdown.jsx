import Image from "next/image";
import React from "react";
import Profile from "../../../public/profile/user-1.jpg";
import Accounts from "../../../public/svgs/icon-account.svg";
import Inbox from "../../../public/svgs/icon-inbox.svg";
import Tasks from "../../../public/svgs/icon-tasks.svg";

import { IconMail } from "@tabler/icons-react";

const ProfileDropdown = () => {
  return (
    <div className="absolute right-0 mt-2 bg-white w-[360px] h-[400px] p-8 rounded-lg shadow-box overflow-scroll overflow-x-hidden h-screen">
      <div className="p-2">
        <p className="font-semibold text-lightBlack text-[1.125rem] leading-6">
          User Profile
        </p>
        <div className="flex items-center space-x-4 py-6">
          <Image
            src={Profile}
            alt="profile"
            className="rounded-full w-24 h-24"
          />
          <div>
            <p className="font-semibold text-0.8 text-lightBlack leading-6">
              Methews Aderson
            </p>
            <p className="text-0.8 text-lightBlack leading-6">Designer</p>
            <div className="flex items-center text-lightBlack  space-x-2">
              <IconMail className="w-4 h-4" />
              <p className="text-0.8">info@modernize.com</p>
            </div>
          </div>
        </div>
        <hr className="text-hr" />
        <div className="flex space-x-4 items-center  text-lightBlack hover:text-primary mt-4 mb-6">
          <div className="bg-lightWhite w-11 flex items-center justify-center h-11 rounded-lg">
            <Image src={Accounts} alt="inbox" />
          </div>
          <div>
            <p className="font-semibold text-0.8 leading-6">My Profile</p>
            <p className="text-0.8 text-lightBlack leading-6">
              Account Settings
            </p>
          </div>
        </div>
        <div className="flex space-x-4 items-center  text-lightBlack hover:text-primary mt-4 mb-6">
          <div className="bg-lightWhite w-11 flex items-center justify-center h-11 rounded-lg">
            <Image src={Inbox} alt="inbox" />
          </div>
          <div>
            <p className="font-semibold text-0.8 leading-6">My Inbox</p>
            <p className="text-0.8 text-lightBlack leading-6">
              Messages & Emails
            </p>
          </div>
        </div>
        <div className="flex space-x-4 items-center  text-lightBlack hover:text-primary mt-4 mb-6">
          <div className="bg-lightWhite w-11 flex items-center justify-center h-11 rounded-lg">
            <Image src={Tasks} alt="inbox" />
          </div>
          <div>
            <p className="font-semibold text-0.8 leading-6">My Tasks</p>
            <p className="text-0.8 text-lightBlack leading-6">
              To-do and Daily Taskw
            </p>
          </div>
        </div>
        <button className="transition-all duration-250 ease-in-out hover:bg-primary border-[1px] text-primary hover:text-white w-full p-1.5 font-[14px] leading-6 rounded my-4">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
