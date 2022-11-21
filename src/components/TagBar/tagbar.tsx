import { useTypedSelector } from "../../hooks/useTypedSelector";

export const TagBar: React.FC = () => {
    const { noteList } = useTypedSelector(store => store.note);
    const tagList = getTagList();

    function getTagList(): string[] {
        const tagList: string[] = [];
        noteList.forEach(note => {
            const tags = note.noteText.split(" ").filter(word => (word[0] === "#" && word.length > 1));
            tagList.push(...tags);
        })
        return Array.from(new Set(tagList));
    }

    return (
        <>
            <h1>TagBar</h1>
            {tagList.map((tag, index) => {
                return <span key={index} style={{ marginRight: "15px" }}>{tag}</span>
            })}
        </>
    );
}