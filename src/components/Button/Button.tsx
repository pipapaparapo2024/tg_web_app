import type { FC, ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  onClick:()=>void
}
export const Button: FC<ButtonProps> = (props) => {
  return (
    <button {...props} className={"button" + (props.className || "")}>
      {props.children}
    </button>
  );
};
