import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Dispatch, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateDataAction } from "../../store/action-creators/note-actions";
import { INote, NoteListProps } from "../../types/note";
import { Note } from "../Note/note";
import "./noteList.scss";

export const NoteList: React.FC<NoteListProps> = (props) => {
    const { noteList, tags } = useTypedSelector(store => store.note);
    const filteredNoteList = getFilteredNoteList();
    const dispatch: Dispatch<any> = useDispatch();

    function getFilteredNoteList() {
        // Фильтр по всем активным тегам одновременно
        // const arr: INote[] = noteList.filter(note => tags.every(tag => note.noteText.split(/[\s,\n,\t,]+/).includes(tag)));

        // Фильтр по любому из активных тегов
        const arr: INote[] = (tags.length) ? noteList.filter(note => note.noteText.split(/[\s,\n,\t,]+/).some(word => tags.includes(word))) : noteList;
        return arr.sort((a, b) => b.id - a.id);
    }

    useEffect(() => {
        dispatch(updateDataAction(noteList));
    }, [noteList, dispatch])

    return (
        <ul className="notes__notelist">
            {filteredNoteList.map((note) => {
                return <Note key={note.id} id={note.id} noteText={note.noteText} reference={props.reference!} />
            })}
        </ul>
    );
}

