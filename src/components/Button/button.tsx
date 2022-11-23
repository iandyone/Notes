import { ButtonProps } from "../../types/button";
import "./button.scss";

export const Button: React.FC<ButtonProps> = (props) => {
    const { buttonText, handleClick, className } = props;

    const onClickHandle: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if (handleClick) {
            e.preventDefault();
            handleClick();
        }
    }

    return <button className={className} onClick={(e) => onClickHandle(e)}>{buttonText}</button>;
}
