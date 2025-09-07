"use client";

import React, {
  useState,
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from "react";
import "./content.css";
import classNames from "classnames";
import _ from "lodash";

interface opendataType {
  data: any[];
  cb: (item: any[]) => void;
}

export interface ContentProps {
  radio?: boolean;
}
export interface ContentRefs {
  close: () => void;
  open: (data: any[], extraData: any[], cb: (item: any[]) => void) => void;
}

const InnerContent: ForwardRefRenderFunction<ContentRefs, ContentProps> = (
  props,
  ref
) => {
  const { radio = true } = props;
  const [show, setShow] = React.useState(false);
  const [openData, setOpenData] = useState({} as opendataType);

  const close = () => {
    setShow(false);
  };
  const open = (data: any[], extraData: any[], cb: (item: any[]) => void) => {
    setOpenData({ data: handleData(data, extraData), cb });
    setShow(true);
  };
  const handleData = (data: any[], extraData: any[]) => {
    const existDataVal = extraData.map((item) => item.value);
    data.forEach((item) => {
      if (existDataVal.includes(item.value)) {
        item.selected = true;
      }
    });
    return data;
  };
  const changeTabValue = (idx: number) => {
    setOpenData((pre) => {
      console.log("inner");
      if (radio) {
        pre.data.forEach((item, index) => {
          if (idx === index) {
            item.selected = true;
          } else {
            item.selected = false;
          }
        });
      } else {
        pre.data[idx].selected = !pre.data[idx].selected;
        console.log(pre.data[idx], "ee");
      }
      return _.cloneDeep(pre);
    });
    console.log("8900770");
  };

  useImperativeHandle(ref, () => {
    return { close, open };
  });
  if (show) {
    return (
      <div className=" anima-in fixed top-0 bottom-0 left-0 right-0 flex flex-col">
        <div onClick={close} className=" flex-1 opacity-70 bg-gray-200"></div>
        <div className=" h-[400px] pt-[10px] pl-[10px]">
          <div
            onClick={() => {
              const allData = openData.data.filter((item) => item.selected);
              openData.cb(allData);
            }}
          >
            确定
          </div>
          <div className=" rounded-t-2xl flex flex-wrap">
            {openData.data.map((item, idx) => {
              return (
                <div
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    changeTabValue(idx);
                  }}
                  key={idx}
                  className={classNames(
                    " h-[30px] border px-[10px] rounded mr-[20px] mb-[10px]",
                    item.selected && " bg-pink-200"
                  )}
                >
                  {item.value}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};
const Content = forwardRef(InnerContent);
export default Content;
