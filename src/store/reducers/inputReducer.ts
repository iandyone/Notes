import { InputAction, InputActionTypes, InputState } from "../../types/input";

const initialState: InputState = {
    noteText: "",
}

export function inputReducer(state = initialState, action: InputAction): InputState {
    switch (action.type) {
        case InputActionTypes.SET_NOTE_TEXT:
            return { ...state, noteText: action.payload };
        case InputActionTypes.EDIT_NOTE_TEXT:
            return { ...state, noteText: action.payload};
        case InputActionTypes.CLEAR_INPUT:
            return { ...state, noteText: initialState.noteText };
        default:
            return state;
    }
}