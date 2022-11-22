import { useRef } from 'react';
import { InputBar } from '../InputBar/inputBar';
import { Notes } from '../Notes/notes';
import { TagBar } from '../TagBar/tagbar';
import './App.scss';

export const App: React.FC = () => {
    const inputRef = useRef(null)

    return (
        <article className='editor'>
            <div className='editor__container'>
                <section className='editor__notes notes'>
                    <h1>App component</h1>
                    <Notes reference={inputRef} />
                </section>
                <section className='editor__actions actions'>
                    <InputBar reference={inputRef} />
                    <TagBar />
                </section>
            </div>
        </article>
    )
}