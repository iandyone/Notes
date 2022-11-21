import { InputBar } from '../InputBar/inputBar';
import { Notes } from '../Notes/notes';
import './App.scss';

export const App: React.FC = () => {
    return (
        <div className="container">
            <h1>App component</h1>
            <InputBar />
            <Notes />
        </div>
    )
}