import { InputAction, InputActionTypes } from "../../types/input";

export const setNoteText = (value: string): InputAction => {
    return { type: InputActionTypes.SET_NOTE_TEXT, payload: value }
}

export const editNoteTextAction = (text: string): InputAction => {
    return { type: InputActionTypes.EDIT_NOTE_TEXT, payload: text }
}

export const clearInputAction = (): InputAction => {
    return { type: InputActionTypes.CLEAR_INPUT };
}