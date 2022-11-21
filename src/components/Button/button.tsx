import { ButtonProps } from "../../types/button";

export const Button: React.FC<ButtonProps> = (props) => {
    const { buttonText, handleClick, children } = props;

    const onClickHandle: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if (handleClick) {
            e.preventDefault();
            handleClick();
        }
    }

    if (children) {
        return <button onClick={(e) => onClickHandle(e)}>{children}</button>
    }

    return <button onClick={(e) => onClickHandle(e)}>{buttonText}</button>
}