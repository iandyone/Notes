import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { clearInputAction, setEditModeAction } from "../../store/action-creators/input-actions";
import { addTagAction, editNoteAction, addNoteAction } from "../../store/action-creators/note-actions";
import { InputBarProps } from "../../types/input";
import { Note } from "../../types/note";
import { Button } from "../Button/button";
import { Input } from "../Input/input";
import "./inputBar.scss";

export const InputBar: React.FC<InputBarProps> = (props) => {
    const { noteText, editMode, editableNodeID } = useTypedSelector(store => store.input);
    const buttonText = (editMode) ? "Edit note" : "Add note";
    const dispatch: Dispatch<any> = useDispatch();

    function handleClick() {
        if (noteText) {
            if (editMode) {
                dispatch(editNoteAction(editableNodeID!, noteText));
                dispatch(addTagAction([]));
                dispatch(setEditModeAction(false));
            } else {
                const note: Note = {
                    id: Date.now(),
                    noteText: noteText,
                }
                dispatch(addNoteAction(note));
            }
            dispatch(clearInputAction());
        }
    }

    return (
        <div className="actions__input-bar input-bar">
            <h1 className="input-bar__title">Edit note</h1>
            <Input reference={props.reference} />
            <Button buttonText={buttonText} handleClick={handleClick} />
        </div>
    );
}