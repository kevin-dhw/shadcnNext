"use client";

import DashboardList from "@/components/common/dashboardList";
import useUpDownStore from "@/store/useUpDownStore";
import Son from "@/components/common/son";

export default function Dashboard() {
  const { dataList } = useUpDownStore();

  const handleSon = (param: Record<string, any>) => {
    console.log(param, "param");
  };
  return (
    <div className="">
      <DashboardList dataList={dataList} />
      <br></br>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" bg-red-200">1</div>
        <div className=" bg-yellow-200"> 2</div>
      </div>
      <Son handleSon={handleSon}>
        <div>son</div>
      </Son>
    </div>
  );
}
