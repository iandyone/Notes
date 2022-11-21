import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { clearInputAction, setEditModeAction } from "../../store/action-creators/input-actions";
import { editNodeAction, setValueAction } from "../../store/action-creators/note-actions";
import { InputBarProps } from "../../types/input";
import { Note } from "../../types/note";
import { Button } from "../Button/button";
import { Input } from "../Input/input";

export const InputBar: React.FC<InputBarProps> = (props) => {
    const { noteText, editMode, editableNodeID } = useTypedSelector(store => store.input);
    const buttonText = (editMode) ? "Edit note" : "Add note";
    const dispatch: Dispatch<any> = useDispatch();

    function handleClick() {
        if (noteText) {
            if (editMode) {
                dispatch(editNodeAction(editableNodeID!, noteText));
                dispatch(setEditModeAction(false));
            } else {
                const note: Note = {
                    id: Date.now(),
                    noteText: noteText,
                }
                dispatch(setValueAction(note));
            }
            dispatch(clearInputAction());
        }
    }

    return (
        <form action="#">
            <Input reference={props.reference} />
            <Button buttonText={buttonText} handleClick={handleClick} />
        </form>
    );
}