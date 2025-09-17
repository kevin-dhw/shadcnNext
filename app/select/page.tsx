"use client";

import React, { useRef, useState } from "react";
import Content, { ContentRefs } from "./components/content";
import { data } from "./components/data";

const Select = () => {
  const contentRef = useRef<ContentRefs>(null);
  const [show, setShow] = useState(false);
  return (
    <div>
      <span
        onClick={() => {
          const extraData = [
            {
              value: " React",
              selected: true,
            },
          ];
          contentRef.current?.open(data, extraData, (item) => {
            console.log(item, "item");
          });
        }}
      >
        打开
      </span>
      <Content ref={contentRef}></Content>
      <br />
      <div className=" w-[40px] bg-gradient-to-r from-[#000] to-[#fff] text-white">
        div
      </div>
      <div
        onClick={() => {
          setShow(!show);
        }}
      >
        点击
      </div>
      <div
        style={{
          height: show ? "100px" : "0",
        }}
        className=" border transform ease-in-out delay-100 duration-500 overflow-hidden"
      >
        <div className=" h-[100px]">
          <div className=" bg-black opacity-50">2233</div>
          <div className=" bg-red-500">22</div>
        </div>
      </div>
      <br />
      <div
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          console.log("1233");
        }}
      >
        冒泡
      </div>
      <input
        className=" border"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value, "werr");
        }}
      ></input>
    </div>
  );
};

export default Select;
