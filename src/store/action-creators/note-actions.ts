import { Note, NoteAction, NoteActionTypes } from "../../types/note";

export function addNoteAction(note: Note): NoteAction {
    return { type: NoteActionTypes.ADD_NOTE, payload: note };
}

export function removeNoteAction(id: number): NoteAction {
    return { type: NoteActionTypes.REMOVE_NOTE, payload: id };
}

export function updateDataAction(data: Note[]): NoteAction {
    return { type: NoteActionTypes.UPDATE_DATA, payload: JSON.stringify(data) };
}