export enum InputActionTypes {
    SET_NOTE_TEXT = "SET_NOTE_TEXT",
    EDIT_NOTE_TEXT = "EDIT_NOTE_TEXT",
    CLEAR_INPUT = "CLEAR_INPUT",
}

interface SetNoteTextAction {
    type: InputActionTypes.SET_NOTE_TEXT,
    payload: string;
}

interface EditNoteTextAction {
    type: InputActionTypes.EDIT_NOTE_TEXT;
    payload: string;
}

interface ClearInputAction {
    type: InputActionTypes.CLEAR_INPUT;
}

export type InputAction = SetNoteTextAction | ClearInputAction | EditNoteTextAction;


export interface InputState {
    noteText: string;
}

