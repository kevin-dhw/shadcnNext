import React, { PropsWithChildren } from "react";

export interface SonProp extends PropsWithChildren {
  num?: number;
  handleSon: (param: Record<string, any>) => void;
}

const Son: React.FC<SonProp> = (props) => {
  const { children, handleSon } = props;
  return (
    <div>
      123456 Son
      <span
        onClick={() => {
          handleSon({ age: 18 });
        }}
      >
        按钮
      </span>
      {children}
    </div>
  );
};

export default Son;
