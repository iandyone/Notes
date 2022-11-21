import { useRef } from 'react';
import { InputBar } from '../InputBar/inputBar';
import { Notes } from '../Notes/notes';
import './App.scss';

export const App: React.FC = () => {
    const inputRef = useRef(null)

    return (
        <div className="container">
            <h1>App component</h1>
            <InputBar reference={inputRef}/>
            <Notes reference={inputRef} />
        </div>
    )
}