import { useTypedSelector } from "../../hooks/useTypedSelector";
import { TagProps } from "../../types/note";
import "./tag.scss";

export const Tag: React.FC<TagProps> = (props) => {
    const { tag, handleClick } = props;
    const tags = useTypedSelector(store => store.note.tags);
    const className = (tags.includes(tag)) ? "tagbar__tag tagbar__tag-active" : "tagbar__tag";

    return <span onClick={() => handleClick(tag)} className={className}>{tag}</span>;
}
