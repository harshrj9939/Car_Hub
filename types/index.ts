import { MouseEventHandler } from "react";

export interface customButtonProps {
    title: string;
    containerStyle?: string;
    handleClick: () => void;
    btnType?: "button" | "submit" | "reset";
    textStyles?: string; 
    rightIcon?: string;  
  }
   