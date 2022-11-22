import { ButtonProps } from "../../types/button";
import "./button.scss";

export const Button: React.FC<ButtonProps> = (props) => {
    const { buttonText, handleClick, children } = props;
    const buttonContent: any = (children) ? children : buttonText;

    const onClickHandle: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if (handleClick) {
            e.preventDefault();
            handleClick();
        }
    }

    return <button onClick={(e) => onClickHandle(e)}>{buttonContent}</button>
}
