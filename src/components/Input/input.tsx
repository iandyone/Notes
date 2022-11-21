import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { setValueAction } from "../../store/action-creators/input-acrions";
import "./input.scss";


export const Input: React.FC = () => {
    const value = useTypedSelector(store => store.input.value);
    const dispatch: Dispatch<any> = useDispatch();

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatch(setValueAction(e.target.value));
    }

    return <input type="text" value={value} onChange={(e) => handleChange(e)} placeholder="Enter the note" />
}