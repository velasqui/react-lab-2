import React, { useState } from "react";
import { Post } from './SocialPosts';
import '../Components/PostForm.css';
import { AiFillCloseCircle } from 'react-icons/ai'

interface Props {
    isOpen: boolean;
    onSubmit: (post: Post) => void;
    onClose: () => void;
}

export default function PostForm({ onSubmit, onClose }: Props) {
  const [post, setPost] = useState<Post>({ title: '', thought: '', });

  function handleTitle(e: React.ChangeEvent<HTMLInputElement>) {
    return setPost({...post, ...{[e.target.name]: e.target.value}});
  }

  function handleThought(e: React.ChangeEvent<HTMLTextAreaElement>) {
    return setPost({...post, ...{[e.target.name]: e.target.value}});
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(post);
    clearFormValues();
    onClose();
  }

  function clearFormValues() {
    setPost({ title: '', thought: '', });
  }
  return (
    <div className="form-modal">
      <div className="modal-overlay" onClick={onClose}/>
      <div className="modal-box">
        <div className="close-modal-btn" onClick={onClose}>
          <AiFillCloseCircle size={30}/>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="modal-title">
            <h3>Title</h3>
            <input
                type="text"
                name="title"
                value={post.title}
                onChange={handleTitle}
            />
          </div>
          <div className="modal-thought">
            <h3>Thought</h3>
            <textarea
                name="thought"
                value={post.thought}
                onChange={handleThought}
            />
          </div>
          <div>
            <button className="add-post-btn" type="submit" onSubmit={handleSubmit}>Add Post</button>
          </div>
        </form>
      </div>
    </div>
  )
}
