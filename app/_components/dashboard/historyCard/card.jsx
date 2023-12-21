"use client";
import Image from "next/image";
import React from "react";
import vectorImage from "../../../../public/images/Vector.png";
import { IconChevronRight } from "@tabler/icons-react";

const HistoryCard = ({ title, textColor, bgColor, refs, date, amount }) => {
  return (
    <div
      key={title}
      className="flex flex-row border-primary rounded-lg w-[100%] p-4 border-8 rounde-md justify-center"
    >
      <Image className="w-[100px] h-[100px]" src={vectorImage} alt="" />
      <div className="flex">
        <div
          className={` flex flex-col leading-7 ${bgColor}  left-0 p-2 rounded-lg w-[100%] items-start justify-center `}
        >
          <h4 className={`${textColor} font-semibold  text-[]`}>{title}</h4>
          <p className={`${textColor} ml-2 font-semibold text-[14px] `}>
            Ref# {refs}
          </p>
          <p className={`${textColor} ml-2   text-[14px] text-slate-400 `}>
            {date}
          </p>
        </div>
        <div className="  flex items-center justify-center whitespace-nowrap">
          <p className="text-[16px] font-bold ">{amount} </p>
          <span>
            <IconChevronRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
