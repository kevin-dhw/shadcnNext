"use client";

import DashboardList from "@/components/common/dashboardList";
import useUpDownStore from "@/store/useUpDownStore";

export default function Dashboard() {
  const { dataList } = useUpDownStore();
  return (
    <div className="">
      <DashboardList dataList={dataList} />
      <br></br>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" bg-red-200">1</div>
        <div className=" bg-yellow-200"> 2</div>
      </div>
    </div>
  );
}
