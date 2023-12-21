"use client";
import Image from "next/image";
import React from "react";

const Card = ({ title, textColor, bgColor, digits, currency }) => {
  return (
    <div
      key={title}
      className={`flex flex-col ${bgColor} p-6 rounded-lg w-[100%] items-center justify-center border-8 border-primary`}
    >
      <h1 className={`${textColor} font-semibold leading-[28px] text-[30px]`}>
        {digits}{" "}
        <span className=" text-[24px]">{currency}</span>
      </h1>
      <p className={`text-black font-semibold text-[16px] leading-[25px]`}>
        {title}
      </p>
    </div>
  );
};

export default Card;
