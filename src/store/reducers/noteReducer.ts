import { NoteAction, NoteActionTypes, NoteState } from "../../types/note";

const initialState: NoteState = {
    noteList: [],
    tags: [],
    data: "",
}

export function notesReducer(state = initialState, action: NoteAction): NoteState {
    switch (action.type) {
        case NoteActionTypes.ADD_NOTE:
            return { ...state, noteList: [...state.noteList, action.payload] };
        case NoteActionTypes.REMOVE_NOTE:
            return { ...state, noteList: state.noteList.filter(item => item.id !== action.payload) };
        case NoteActionTypes.EDIT_NOTE:
            const newNoteList = state.noteList;
            newNoteList.map(note => {
                if (note.id === action.payload.noteID) {
                    return note.noteText = action.payload.noteText
                }
                return note
            })
            return { ...state, noteList: [...newNoteList!] }
        case NoteActionTypes.UPDATE_DATA:
            return { ...state, data: action.payload };
        case NoteActionTypes.ADD_TAG: {
            return { ...state, tags: action.payload };
        }
        default:
            return state;
    }
}