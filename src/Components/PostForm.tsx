import React, { useState } from "react";
import { Post } from './SocialPosts';
import '../Components/PostForm.css';

interface Props {
    onSubmit: (post: Post) => void;
}

export default function PostForm({ onSubmit }: Props) {
  const [post, setPost] = useState<Post>({ title: '', thought: '' });

  function handlePost(e: React.ChangeEvent<HTMLInputElement>) {
    return setPost({...post, ...{[e.target.name]: e.target.value}});
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(post);
    clearFormValues();
  }

  function clearFormValues() {
    setPost({ title: '', thought: '' });
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>Title</h3>
      <input
          type="text"
          name="title"
          value={post.title}
          onChange={handlePost}
      />
      <h3>Thought</h3>
      <input
          type="text"
          name="thought"
          value={post.thought}
          onChange={handlePost}
      />
      <div>
        <button className="add-post-btn" type="submit" onSubmit={handleSubmit}>Add Post</button>
      </div>
    </form>
  )
}
