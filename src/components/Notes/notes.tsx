import { useTypedSelector } from "../../hooks/useTypedSelector";
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Button } from "../Button/button";
import { Dispatch, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeNoteAction, updateDataAction } from "../../store/action-creators/note-actions";
import { clearInputAction, editNoteTextAction, setEditModeAction } from "../../store/action-creators/input-actions";
import { NotesBarProps } from "../../types/note";

export const Notes: React.FC<NotesBarProps> = (props) => {
    const notes = useTypedSelector(store => store.note.noteList);
    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        dispatch(updateDataAction(notes));
    }, [notes, dispatch])

    const removeNote = (id: number): void => {
        dispatch(removeNoteAction(id));
        dispatch(setEditModeAction(false));
        dispatch(clearInputAction());
    }

    const editNote = (id: number, text: string): void => {
        dispatch(setEditModeAction(true, id));
        dispatch(editNoteTextAction(text));
        props.reference?.current.focus();
    }

    return (
        <>
            <h1>Notes component</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Notes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {notes.map((note, index) => {
                        return (
                            <tr key={note.id}>
                                <td>{index + 1}</td>
                                <td>{note.noteText}</td>
                                <td>
                                    <Button handleClick={() => editNote(note.id, note.noteText)} >
                                        <FaEdit />
                                    </Button>
                                    <Button handleClick={() => removeNote(note.id)}>
                                        <MdDelete />
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

