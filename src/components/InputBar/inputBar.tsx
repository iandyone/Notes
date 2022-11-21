import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { clearInputAction } from "../../store/action-creators/input-actions";
import { setValueAction } from "../../store/action-creators/note-actions";
import { Note } from "../../types/note";
import { Button } from "../Button/button";
import { Input } from "../Input/input";

export const InputBar: React.FC = () => {
    const { noteText, editMode, editableNodeID} = useTypedSelector(store => store.input);
    const buttonText = (editMode) ? "Edit note" : "Add note";

    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    function handleClick() {
        if (noteText) {
            if(editMode) {
                // произвести замену 
            }
            const note: Note = {
                id: Date.now(),
                noteText: noteText,
            }

            dispatch(setValueAction(note));
            dispatch(clearInputAction());
        }
    }

    return (
        <form action="#">
            <Input reference={inputRef} />
            <Button buttonText={buttonText} handleClick={handleClick} />
        </form>
    );
}