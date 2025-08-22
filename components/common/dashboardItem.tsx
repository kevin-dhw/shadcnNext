"use client";

import React, { useRef, useState } from "react";
import classNames from "classnames";

export default function DashboardList() {
  const [show, setShow] = React.useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | undefined>(0);
  return (
    <div className="">
      <div className=" w-[200px] border px-[20px] rounded-[10px] py-[5px]">
        <div className="  flex justify-between">
          <div>123</div>
          <div
            onClick={() => {
              setShow(!show);
              const clientHeight = contentRef.current?.clientHeight;
              setContentHeight(clientHeight ? clientHeight : 0);
              setTimeout(() => {
                console.log(contentHeight, "contentHeight click");
              }, 500);
            }}
          >
            +
          </div>
        </div>
        <div
          style={{
            height: show ? `${contentHeight}px` : "0px",
          }}
          className={classNames(
            " transition-all ease-in-out duration-500 delay-200 overflow-hidden"
          )}
        >
          <div ref={contentRef} className=" h-[100px]">
            content
          </div>
        </div>
      </div>
    </div>
  );
}
