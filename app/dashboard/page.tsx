"use client";

import { useRef, useState } from "react";
import DashboardList from "@/components/common/dashboardList";
import useUpDownStore from "@/store/useUpDownStore";
import Son from "@/components/common/son";
import classNames from "classnames";
import Animation, {
  AnimationRef,
} from "@/components/common/dashboardList/animation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Dashboard() {
  const { dataList } = useUpDownStore();
  const animationRef = useRef<AnimationRef>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const [show, setShow] = useState(false);
  const [height, setHeight] = useState(0);

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
      <div
        className=" flex"
        onClick={() => {
          animationRef.current?.open();
        }}
      >
        <div
          className={classNames(
            " m-auto h-[100px] w-[100px] border shadow-[1px_1px_10px_1px_#000] cursor-pointer",
            " bg-gradient-to-r from-[#fff] to-[#000]",
            " transition-all ease-in-out duration-1000 delay-100 hover:scale-110"
          )}
        ></div>
      </div>

      <Animation ref={animationRef} />
      <div>
        <div
          onClick={() => {
            const tempHeight = divRef.current?.clientHeight;
            setHeight(tempHeight || 0);
            console.log(height);
            setShow(!show);
          }}
        >
          open
        </div>
        <div
          style={{
            height: show ? `${height}px` : "0px",
          }}
          className=" transition-all ease-in-out duration-700 delay-100 overflow-hidden"
        >
          <div ref={divRef}>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
          </div>
        </div>
      </div>
      <div>
        <div>responsiveness</div>
        <div className=" grid gap-[10px] md:grid-cols-1 grid-cols-2">
          <div className=" bg-red-200">1</div>
          <div className=" bg-blue-200">2</div>
        </div>
      </div>
      <Dialog>
        <DialogTrigger>OpenDialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
