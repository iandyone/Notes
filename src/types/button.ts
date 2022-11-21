import React from "react";

export interface ButtonProps {
    handleClick: () => void;
    buttonText?: string;
    children?: React.ReactNode;
}   