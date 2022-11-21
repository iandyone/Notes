import React from "react";

export interface ButtonProps {
    buttonText?: string;
    handleClick?: () => void;
    children?: React.ReactNode;
}   