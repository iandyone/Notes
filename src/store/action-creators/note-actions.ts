import { INote, NoteAction, NoteActionTypes } from "../../types/note";

export function addNoteAction(note: INote): NoteAction {
    return { type: NoteActionTypes.ADD_NOTE, payload: note };
}

export function removeNoteAction(id: number): NoteAction {
    return { type: NoteActionTypes.REMOVE_NOTE, payload: id };
}

export function editNoteAction(id: number, text: string): NoteAction {
    return { type: NoteActionTypes.EDIT_NOTE, payload: { noteID: id, noteText: text } };
}

export function updateDataAction(data: INote[]): NoteAction {
    return { type: NoteActionTypes.UPDATE_DATA, payload: JSON.stringify(data) };
}

export function addTagAction(tag: string[]): NoteAction {
    return { type: NoteActionTypes.ADD_TAG, payload: tag };
}