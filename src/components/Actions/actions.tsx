import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { clearInputAction, setEditModeAction } from "../../store/action-creators/input-actions";
import { addNoteAction, addTagAction, editNoteAction, removeNoteAction } from "../../store/action-creators/note-actions";
import { ActionsProps, Note } from "../../types/note";
import { Button } from "../Button/button";
import { Input } from "../Input/input";
import { TagBar } from "../TagBar/tagbar";
import "./actions.scss";

export const Actions: React.FC<ActionsProps> = (props) => {
    const { noteText, editMode, editableNodeID } = useTypedSelector(store => store.input);
    const dispatch: Dispatch<any> = useDispatch();

    function saveNote() {
        if (editMode) {
            dispatch(editNoteAction(editableNodeID!, noteText));
            dispatch(clearInputAction());
            dispatch(addTagAction([]));
            dispatch(setEditModeAction(false));
        } else if (noteText) {
            const note: Note = {
                id: Date.now(),
                noteText: noteText,
            }
            dispatch(addNoteAction(note));
        }
        dispatch(clearInputAction());

    }

    function deleteNote() {
        dispatch(removeNoteAction(editableNodeID!));
        dispatch(clearInputAction());
        dispatch(addTagAction([]));
        dispatch(setEditModeAction(false));
    }

    return (
        <section className="editor__actions actions">
            <div className="actions__header">
                <h1 className="actions__title">Edit Note</h1>
                <div className="actions__buttons">
                    <Button className="actions__button-save" buttonText="Save" handleClick={saveNote} reference={props.reference} />
                    <Button className="actions__button-delete" buttonText="Delete" handleClick={deleteNote} reference={props.reference} />
                </div>
            </div>
            <Input reference={props.reference} />
            <TagBar />
        </section>
    );
}