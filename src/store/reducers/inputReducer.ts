import { InputAction, InputActionTypes, InputState } from "../../types/input";

const initialState: InputState = {
    noteText: "",
    editMode: false,
    editableNodeID: null,
}

export function inputReducer(state = initialState, action: InputAction): InputState {
    switch (action.type) {
        case InputActionTypes.SET_NOTE_TEXT:
            return { ...state, noteText: action.payload };
        case InputActionTypes.EDIT_NOTE_TEXT:
            return { ...state, noteText: action.payload };
        case InputActionTypes.SET_EDIT_MODE:
            return { ...state, editMode: action.payload.status, editableNodeID: action.payload.editableNoteID! };
        case InputActionTypes.CLEAR_INPUT:
            return { ...state, noteText: initialState.noteText };
        default:
            return state;
    }
}