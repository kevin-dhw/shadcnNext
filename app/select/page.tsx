"use client";

import React, { useRef } from "react";
import Content, { ContentRefs } from "./components/content";
import { data } from "./components/data";

const Select = () => {
  const contentRef = useRef<ContentRefs>(null);
  return (
    <div>
      <span
        onClick={() => {
          const extraData = [
            {
              value: " CSS",
              selected: true,
            },
            {
              value: " Vue",
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
    </div>
  );
};

export default Select;
