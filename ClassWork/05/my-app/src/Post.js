import React, { useState } from 'react';
import Comments from './comments';

const Post = () => {
  const [post] = useState({
    title: 'This is a sample post title',
    content: 'This is the content of the post.',
  });

  const [comments] = useState([
    { id: 1, text: 'Great post!' },
    { id: 2, text: 'Very informative, thanks for sharing.' },
    { id: 3, text: 'I disagree with some points, but overall good.' },
    { id: 4, text: 'This was really helpful.' },
    { id: 5, text: 'Interesting perspective!' },
  ]);

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <Comments comments={comments} />
    </div>
  );
};

export default Post;