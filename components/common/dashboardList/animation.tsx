" use client";

import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from "react";
import "./animation.css";

export interface AnimationProps {}
export interface AnimationRef {
  open: () => void;
}

const InnerAnimation: ForwardRefRenderFunction<AnimationRef, AnimationProps> = (
  _,
  ref
) => {
  const [show, setShow] = React.useState(false);

  const open = () => {
    setShow(true);
  };

  useImperativeHandle(ref, () => {
    return { open };
  });

  if (show) {
    return (
      <div className=" down-to-up flex flex-col fixed top-0 bottom-0 left-0 right-0 ">
        <div
          onClick={() => {
            setShow(false);
          }}
          className=" h-[200px] opacity-70 bg-white"
        >
          <span></span>
          {/* animation */}
        </div>
        <div className=" flex-1 bg-white">content</div>
      </div>
    );
  }
};

const Animation = forwardRef(InnerAnimation);
export default Animation;
