const DisplayPosts = ({ posts, onEdit, onDelete }) => {
    return (
        <div>
            <h3>Posts</h3>
            {posts.map((post) => (
                <div key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <button onClick={() => onEdit(post)}>Edit</button>
                    <button onClick={() => onDelete(post.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default DisplayPosts;