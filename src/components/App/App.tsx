import { useRef } from 'react';
import { Actions } from '../Actions/actions';
import { Notes } from '../Notes/notes';
import './App.scss';

export const App: React.FC = () => {
    const inputRef = useRef(null);

    return (
        <article className="editor">
            <div className="editor__container">
                <Notes reference={inputRef} />
                <Actions reference={inputRef}/>
            </div>
        </article>
    );
}