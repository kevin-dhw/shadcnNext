"use client";

import React, { useState, useEffect } from "react";
import "./Tab.css";

interface TabProps {
  title: string;
}

const Tab: React.FC<TabProps> = ({ title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getData = async () => {
    const response = await fetch(`/api/friend/list?page=${1}`);
    console.log(response, "response");
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    // 112234433
    <div
      className="tab"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="tab-content">{title}</div>
      <div className={`tab-line ${isHovered ? "hovered" : ""}`} />
    </div>
  );
};

export default Tab;
