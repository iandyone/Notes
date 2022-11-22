import { useRef } from 'react';
import { Input } from '../Input/input';
import { Notes } from '../Notes/notes';
import { TagBar } from '../TagBar/tagbar';
import './App.scss';

export const App: React.FC = () => {
    const inputRef = useRef(null)

    return (
        <article className='editor'>
            <div className='editor__container'>
                <Notes reference={inputRef} />
                <section className='editor__actions actions'>
                    <Input reference={inputRef} />
                    <TagBar />
                </section>
            </div>
        </article>
    )
}