import { MutableRefObject } from "react";

export enum NoteActionTypes {
    ADD_NOTE = "ADD_NOTE",
    REMOVE_NOTE = "REMOVE_NOTE",
    EDIT_NOTE = "EDIT_CURRENT_NOTE",
    UPDATE_DATA = "UPDATE_DATA",
    ADD_TAG = "ADD_TAG",
}

export interface NoteListProps {
    reference?: MutableRefObject<any>;
}

export interface ActionsProps extends NoteListProps { };

export interface NotesProps extends NoteListProps { };

export interface INote {
    id: number;
    noteText: string;
}

export interface NoteState {
    noteList: INote[];
    data: string;
    tags: string[];
}

interface setValueAction {
    type: NoteActionTypes.ADD_NOTE,
    payload: INote;
}

interface RemoveNoteAction {
    type: NoteActionTypes.REMOVE_NOTE;
    payload: number;
}

interface UpdateDataAction {
    type: NoteActionTypes.UPDATE_DATA;
    payload: string;
}

interface EditNoteAction {
    type: NoteActionTypes.EDIT_NOTE;
    payload: {
        noteID: number;
        noteText: string;
    }
}

interface AddTagAction {
    type: NoteActionTypes.ADD_TAG;
    payload: string[];
}

export interface NoteProps {
    id: number;
    noteText: string;
    handleClick?: (id: number, text: string) => void;
    reference: MutableRefObject<any>;
}

export interface TagProps {
    tag: string;
    handleClick: (newTag: string) => void;
}


export type NoteAction = setValueAction | UpdateDataAction | RemoveNoteAction | EditNoteAction | AddTagAction;