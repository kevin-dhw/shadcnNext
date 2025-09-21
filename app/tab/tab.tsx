"use client";

import React, { useState } from "react";
import "./Tab.css";

interface TabProps {
  title: string;
}

const Tab: React.FC<TabProps> = ({ title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    // 1122344
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
