import { InputAction, InputActionTypes, InputState } from "../../types/input";

const initialState: InputState = {
    value: "",
}

export function inputReducer(state = initialState, action: InputAction): InputState {
    switch (action.type) {
        case InputActionTypes.SET_VALUE:
            return { ...state, value: action.payload };
        case InputActionTypes.CLEAR_INPUT:
            return { value: initialState.value };
        default:
            return state;
    }
}