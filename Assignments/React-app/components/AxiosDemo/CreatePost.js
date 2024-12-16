import { useState } from "react";

const CreatePost = ({ onCreate }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !body) return;
        onCreate({ title, body });
        setTitle("");
        setBody("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Create Post</h3>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <button type="submit">Add Post</button>
        </form>
    );
};

export default CreatePost;