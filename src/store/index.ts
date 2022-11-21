import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { inputReducer } from './reducers/inputReducer';
import { notesReducer } from './reducers/noteReducer';

const rootReducer = combineReducers({
    input: inputReducer,
    note: notesReducer,
})

export type RootType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());