"use client";

import DashboardList from "@/components/common/dashboardList";
import useUpDownStore from "@/store/useUpDownStore";

export default function Dashboard() {
  const { dataList } = useUpDownStore();
  return (
    <div className="">
      <DashboardList dataList={dataList} />
    </div>
  );
}
