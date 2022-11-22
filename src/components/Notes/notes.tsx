import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { clearInputAction, setEditModeAction } from "../../store/action-creators/input-actions";
import { addNoteAction, addTagAction, editNoteAction } from "../../store/action-creators/note-actions";
import { Note, NotesBarProps } from "../../types/note";
import { Button } from "../Button/button";
import { NoteList } from "../NoteList/noteList";
import "./notes.scss";


export const Notes: React.FC<NotesBarProps> = (props) => {
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
        <section className='editor__notes notes'>
            <h1>App component</h1>
            <NoteList reference={props.reference} />
            <Button buttonText={buttonText} handleClick={handleClick} />
        </section>
    );
}