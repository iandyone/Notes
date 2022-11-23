export interface ButtonProps {
    handleClick: () => void;
    buttonText?: string;
    children?: React.ReactNode;
    className?: string;
}   