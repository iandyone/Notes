import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { setNoteText } from "../../store/action-creators/input-actions";
import { InputProps } from "../../types/input";
import "./input.scss";

export const Input: React.FC<InputProps> = (props) => {
    const noteText = useTypedSelector(store => store.input.noteText);
    const dispatch: Dispatch<any> = useDispatch();

    const handleOnChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        dispatch(setNoteText(e.target.value));
    }

    const handleOnFocus: React.FocusEventHandler<HTMLTextAreaElement> = (e) => {
        e.target.disabled = false;
    }

    return <textarea className="actions__input" value={noteText} placeholder="Click the button and write a note" disabled={true} onChange={(e) => handleOnChange(e)} onFocus={(e) => handleOnFocus(e)} ref={props.reference} />
}