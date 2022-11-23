import { editNoteTextAction, setEditModeAction } from "../../store/action-creators/input-actions";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { NoteProps } from "../../types/note";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./note.scss";

export const Note: React.FC<NoteProps> = (props) => {
    const { id, noteText, reference } = props;
    const dispatch: Dispatch<any> = useDispatch();
    const editableNodeID = useTypedSelector(store => store.input.editableNodeID);
    const className = (id === editableNodeID) ? "notes__note notes__note-active" : "notes__note";

    function editNote(id: number, text: string): void {
        reference.current.disabled = false;
        reference.current.focus();
        dispatch(setEditModeAction(true, id));
        dispatch(editNoteTextAction(text));
    }

    return <li className={className} onClick={() => editNote(id, noteText)} ><p>{noteText}</p></li>
}