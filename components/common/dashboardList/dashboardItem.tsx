"use client";

import React, { useRef, useState } from "react";
import classNames from "classnames";
import useUpDownStore, { Item } from "@/store/useUpDownStore";

export interface DashboardItemProps extends Item {
  idx: number;
}

export default function DashboardItem(props: DashboardItemProps) {
  const { title, content, isSelected, idx } = props;
  const { changeItem } = useUpDownStore();
  const [show, setShow] = React.useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | undefined>(0);

  return (
    <div>
      <div
        className={classNames(
          " border px-[20px] rounded-[10px] py-[5px] mb-[10px] cursor-pointer",
          isSelected && show ? " border-amber-700" : ""
        )}
        onClick={() => {
          setShow(!show);
          const clientHeight = contentRef.current?.clientHeight;
          setContentHeight(clientHeight ? clientHeight : 0);
          changeItem(idx);
        }}
      >
        <div className=" flex justify-between">
          <div>{title}</div>
          <div>+</div>
        </div>
        <div
          style={{
            height: show && isSelected ? `${contentHeight}px` : "0px",
          }}
          className={classNames(
            " transition-all ease-in-out duration-500 delay-200 overflow-hidden"
          )}
        >
          <div ref={contentRef}>{content}</div>
        </div>
      </div>
    </div>
  );
}
