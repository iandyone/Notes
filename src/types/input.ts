export enum InputActionTypes {
    SET_NOTE_TEXT = "SET_NOTE_TEXT",
    EDIT_NOTE_TEXT = "EDIT_NOTE_TEXT",
    CLEAR_INPUT = "CLEAR_INPUT",
    SET_EDIT_MODE = "SET_EDIT_MODE",
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

interface SetEditModeAction {
    type: InputActionTypes.SET_EDIT_MODE,
    payload: {
        active: boolean,
        editableNoteID: number,
    }
}

export type InputAction = SetNoteTextAction | ClearInputAction | EditNoteTextAction | SetEditModeAction;


export interface InputState {
    noteText: string;
    editMode: boolean;
    editableNodeID: number | null;
}

