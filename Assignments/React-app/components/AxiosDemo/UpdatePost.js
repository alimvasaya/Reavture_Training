import { useState } from "react";

const UpdatePost = ({ post, onUpdate, onCancel }) => {
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(post.id, { title, body });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Update Post</h3>
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
            <button type="submit">Update Post</button>
            <button type="button" onClick={onCancel}>
                Cancel
            </button>
        </form>
    );
};

export default UpdatePost;