import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { addTagAction } from "../../store/action-creators/note-actions";
import "./tagbar.scss";

export const TagBar: React.FC = () => {
    const { noteList } = useTypedSelector(store => store.note);
    const { tags } = useTypedSelector(store => store.note);
    const tagList = getTagList();
    const dispatch: Dispatch<any> = useDispatch();

    function getTagList(): string[] {
        const tagList: string[] = [];
        noteList.forEach(note => {
            const tags = note.noteText.split(" ").filter(word => (word[0] === "#" && word.length > 1));
            tagList.push(...tags);
        })
        return Array.from(new Set(tagList));
    }

    function handleClick(newTag: string,): void {
        const activeTagList: string[] = (tags.includes(newTag)) ? tags.filter(tag => tag !== newTag) : Array.from(new Set([...tags, newTag]));
        dispatch(addTagAction(activeTagList));
    }

    return (
        <div className="actions__tagbar tagbar">
            {tagList.map((tag, index) => {
                return <span key={index} onClick={() => handleClick(tag)} className="tagbar__tag">{tag}</span>
            })}
        </div>
    );
}