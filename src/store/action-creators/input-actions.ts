import { InputAction, InputActionTypes } from "../../types/input";

export const setNoteText = (value: string): InputAction => {
    return { type: InputActionTypes.SET_NOTE_TEXT, payload: value }
}

export const editNoteTextAction = (text: string): InputAction => {
    return { type: InputActionTypes.EDIT_NOTE_TEXT, payload: text }
}

export const setEditModeAction = (mode: boolean, id = 0): InputAction => {
    return { type: InputActionTypes.SET_EDIT_MODE, payload: { active: mode, editableNoteID: id } }
}

export const clearInputAction = (): InputAction => {
    return { type: InputActionTypes.CLEAR_INPUT };
}