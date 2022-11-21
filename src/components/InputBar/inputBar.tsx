import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { clearInputAction } from "../../store/action-creators/input-acrions";
import { setValueAction } from "../../store/action-creators/note-actions";
import { Note } from "../../types/note";
import { Button } from "../Button/button";
import { Input } from "../Input/input";

export const InputBar: React.FC = () => {
    const newNote = useTypedSelector(store => store.input.value);
    const dispatch = useDispatch();

    function handleClick() {
        const note: Note = {
            id: Date.now(),
            noteText: newNote,
        }

        dispatch(setValueAction(note));
        dispatch(clearInputAction());
    }

    return (
        <form action="#">
            <Input />
            <Button buttonText='Add note' handleClick={handleClick} />
        </form>
    );
}