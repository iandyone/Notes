import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { setNoteText } from "../../store/action-creators/input-actions";
import { InputProps } from "../../types/input";
import "./input.scss";

export const Input: React.FC<InputProps> = (props) => {
    const noteText = useTypedSelector(store => store.input.noteText);
    const dispatch: Dispatch<any> = useDispatch();
    
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatch(setNoteText(e.target.value));
    }

    return <input ref={props.reference} type="text" value={noteText} onChange={(e) => handleChange(e)} placeholder="Enter the note" />
}