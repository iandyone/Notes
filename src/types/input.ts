export enum InputActionTypes {
    SET_VALUE = "SET_VALUE",
    CLEAR_INPUT = "CLEAR_INPUT",
}

interface SetValueAction {
    type: InputActionTypes.SET_VALUE,
    payload: string;
}

interface ClearInputAction {
    type: InputActionTypes.CLEAR_INPUT;
}

export type InputAction = SetValueAction | ClearInputAction;


export interface InputState {
    value: string;
}

