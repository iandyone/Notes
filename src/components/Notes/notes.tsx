import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { editNoteTextAction, setEditModeAction } from "../../store/action-creators/input-actions";
import { addNoteAction } from "../../store/action-creators/note-actions";
import { INote, NotesProps } from "../../types/note";
import { Button } from "../Button/button";
import { NoteList } from "../NoteList/noteList";
import "./notes.scss";

export const Notes: React.FC<NotesProps> = (props) => {
    const dispatch: Dispatch<any> = useDispatch();

    function handleClick() {
        const note: INote = {
            id: Date.now(),
            noteText: "New note",
        }
        dispatch(addNoteAction(note));
        dispatch(setEditModeAction(true, note.id));
        dispatch(editNoteTextAction(note.noteText));
        props.reference!.current!.disabled = false;
        props.reference?.current.focus();
    }
    
    return (
        <section className="editor__notes notes">
            <h1 className="notes__title">Notes</h1>
            <Button className="notes__button" buttonText="Add note" handleClick={handleClick} />
            <NoteList reference={props.reference} />
        </section>
    );
}