import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./tag.scss";

export interface TagProps {
    tag: string;
    handleClick: (newTag: string) => void;
}

export const Tag: React.FC<TagProps> = (props) => {
    const { tag, handleClick } = props;
    const tags = useTypedSelector(store => store.note.tags);
    const className = (tags.includes(tag)) ? "tagbar__tag tagbar__tag-active" : "tagbar__tag";

    return <span onClick={() => handleClick(tag)} className={className}>{tag}</span>;
}
