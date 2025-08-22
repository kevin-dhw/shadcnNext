"use client";

import DashboardItem from "./dashboardItem";
import { Item } from "@/store/useUpDownStore";

export interface DashboardListProps {
  dataList: Item[];
}

export default function DashboardList(props: DashboardListProps) {
  const { dataList } = props;

  return (
    <div>
      {dataList.map((item, idx) => {
        return <DashboardItem key={idx} {...item} idx={idx} />;
      })}
    </div>
  );
}
