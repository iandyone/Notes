import { useTypedSelector } from "../../hooks/useTypedSelector";
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Button } from "../Button/button";
import { Dispatch, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTagAction, removeNoteAction, updateDataAction } from "../../store/action-creators/note-actions";
import { clearInputAction, editNoteTextAction, setEditModeAction } from "../../store/action-creators/input-actions";
import { Note, NotesBarProps } from "../../types/note";
import "./noteList.scss";

export const NoteList: React.FC<NotesBarProps> = (props) => {
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

    function removeNote(id: number): void {
        dispatch(removeNoteAction(id));
        dispatch(clearInputAction());
        dispatch(addTagAction([]));
        dispatch(setEditModeAction(false));
    }

    function editNote(id: number, text: string): void {
        dispatch(setEditModeAction(true, id));
        dispatch(editNoteTextAction(text));
        props.reference?.current.focus();
    }

    useEffect(() => {
        dispatch(updateDataAction(noteList));
    }, [noteList, dispatch])

    return (
        <ul className="notes__notelist">
            {filteredNoteList.map((note, index) => {
                return (
                    <li key={note.id} className="notes__note"><p>{note.noteText}</p>
                        {/* <td>
                            <Button handleClick={() => editNote(note.id, note.noteText)} >
                                <FaEdit />
                            </Button>
                            <Button handleClick={() => removeNote(note.id)}>
                                <MdDelete />
                            </Button>
                        </td> */}
                    </li>
                );
            })}
        </ul>
    );
}
