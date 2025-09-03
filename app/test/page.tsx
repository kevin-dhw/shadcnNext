"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { renderData, statueMap } from "./data";
import classNames from "classnames";
import { useTheme } from "@/contexts/ThemeContext";

const Test = () => {
  const [show, setShow] = React.useState(false);
  const innerRef = useRef<HTMLDivElement>(null);

  const { theme, toggleTheme } = useTheme();
  console.log(theme, "theme");

  return (
    <div className=" flex flex-col">
      <div
        onClick={() => {
          setShow(!show);
        }}
      >
        增加
      </div>
      <div onClick={toggleTheme} className=" dark:bg-amber-200">
        changeTheme
      </div>
      <div
        style={{ height: show ? "200px" : "0px" }}
        className=" transition-all ease-in-out duration-700 border overflow-hidden"
      >
        <div ref={innerRef} className=" h-[200px]">
          123
        </div>
      </div>
      <div>
        {renderData.map((item, idx) => {
          const data = statueMap.find((ele) => ele.statue === item.statue);
          return (
            <div key={idx} className=" w-[100px] h-[100px] border flex">
              <div>
                <div
                  className={classNames(
                    " bg-gradient-to-r to-[white]",
                    `from-[${data?.bgColor}]`
                  )}
                >
                  {data?.value}
                </div>
                <div className=" flex-1">
                  <Image
                    className=" w-[40px] h-[40px]"
                    src={data?.img}
                    alt="Landscape picture"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Test;
