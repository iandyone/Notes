
import { MutableRefObject } from "react";

export interface ButtonProps {
    handleClick: () => void;
    buttonText?: string;
    children?: React.ReactNode;
    className?: string;
    reference?: MutableRefObject<any>;
}   