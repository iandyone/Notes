import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Dispatch, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateDataAction } from "../../store/action-creators/note-actions";
import { editNoteTextAction, setEditModeAction } from "../../store/action-creators/input-actions";
import { Note, NoteListProps } from "../../types/note";
import "./noteList.scss";

export const NoteList: React.FC<NoteListProps> = (props) => {
    const { noteList, tags } = useTypedSelector(store => store.note);
    const filteredNoteList = getFilteredNoteList();
    const dispatch: Dispatch<any> = useDispatch();

    function getFilteredNoteList() {
        function hasTag(word: string): boolean {
            return tags.includes(word);
        }

        const arr: Note[] = (tags.length) ? noteList.filter(note => note.noteText.split(" ").some(hasTag)) : noteList;
        return arr.sort((a, b) => b.id - a.id);
    }

    function editNote(id: number, text: string): void {
        dispatch(setEditModeAction(true, id));
        dispatch(editNoteTextAction(text));
        props.reference?.current.focus();
        props.reference!.current.disabled = false;
    }

    useEffect(() => {
        dispatch(updateDataAction(noteList));
    }, [noteList, dispatch])

    return (
        <ul className="notes__notelist">
            {filteredNoteList.map((note, index) => {
                return <li key={note.id} className="notes__note" onClick={() => editNote(note.id, note.noteText)}><p>{note.noteText}</p></li>
            })}
        </ul>
    );
}

