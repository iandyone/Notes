import { InputAction, InputActionTypes } from "../../types/input";

export const setValueAction = (value: string): InputAction => {
    return { type: InputActionTypes.SET_VALUE, payload: value }
}

export const clearInputAction = (): InputAction => {
    return { type: InputActionTypes.CLEAR_INPUT };
}