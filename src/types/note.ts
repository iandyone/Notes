export interface Note {
    id: number;
    noteText: string;
}

export interface NoteState {
    noteList: Note[];
    data: string;
}

export enum NoteActionTypes {
    ADD_NOTE = "ADD_NOTE",
    REMOVE_NOTE = "REMOVE_NOTE",
    UPDATE_DATA = "UPDATE_DATA",
}

interface setValueAction {
    type: NoteActionTypes.ADD_NOTE,
    payload: Note;
}

interface RemoveNoteAction {
    type: NoteActionTypes.REMOVE_NOTE;
    payload: number;
}

interface UpdateDataAction {
    type: NoteActionTypes.UPDATE_DATA;
    payload: string;
}



export type NoteAction = setValueAction | UpdateDataAction | RemoveNoteAction;