import { useEffect, useState } from "react";
import { fetchPosts, createPost, updatePost, deletePost } from "./apiService";
import DisplayPosts from "./DisplayPosts";
import CreatePost from "./CreatePost";
import UpdatePost from "./UpdatePost";

const AxiosGetDemo = () => {
    const [posts, setPosts] = useState([]);
    const [editingPost, setEditingPost] = useState(null);

    const getPosts = async () => {
        try {
            const response = await fetchPosts();
            setPosts(response.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    const handleCreatePost = async (newPost) => {
        try {
            const response = await createPost(newPost);
            setPosts([...posts, response.data]);
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    const handleUpdatePost = async (id, updatedPost) => {
        try {
            const response = await updatePost(id, updatedPost);
            setPosts(posts.map((post) => (post.id === id ? response.data : post)));
            setEditingPost(null);
        } catch (error) {
            console.error("Error updating post:", error);
        }
    };

    const handleDeletePost = async (id) => {
        try {
            await deletePost(id);
            setPosts(posts.filter((post) => post.id !== id));
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <h2>Axios CRUD Demo</h2>
            <CreatePost onCreate={handleCreatePost} />
            {editingPost ? (
                <UpdatePost post={editingPost} onUpdate={handleUpdatePost} onCancel={() => setEditingPost(null)} />
            ) : (
                <DisplayPosts posts={posts} onEdit={setEditingPost} onDelete={handleDeletePost} />
            )}
        </div>
    );
};

export default AxiosGetDemo;