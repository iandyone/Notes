import { NoteAction, NoteActionTypes, NoteState } from "../../types/note";

const initialState: NoteState = {
    noteList: [],
    data: "",
}

export function notesReducer(state = initialState, action: NoteAction): NoteState {
    switch (action.type) {
        case NoteActionTypes.ADD_NOTE:
            return { ...state, noteList: [...state.noteList, action.payload] };
        case NoteActionTypes.REMOVE_NOTE:
            return { ...state, noteList: state.noteList.filter(item => item.id !== action.payload) }
        case NoteActionTypes.UPDATE_DATA:
            return { ...state, data: action.payload };
        default:
            return state;
    }
}