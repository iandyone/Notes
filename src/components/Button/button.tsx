import { ButtonProps } from "../../types/button";
import "./button.scss";

export const Button: React.FC<ButtonProps> = (props) => {
    const { buttonText, handleClick, className, reference } = props;

    const onClickHandle: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if (handleClick) {
            e.preventDefault();
            handleClick();
            reference!.current.disabled = true;
        }
    }

    return <button className={className} onClick={(e) => onClickHandle(e)}>{buttonText}</button>
}
