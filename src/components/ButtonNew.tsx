import { useState } from "react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  onClick: () => void;
  color?: string;
}

function ButtonNew({ children, onClick, color }: Props) {
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default ButtonNew;
