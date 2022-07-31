import React, { useState } from 'react'
import PostForm from './PostForm'
import PostInList from './PostInList'
import './SocialPosts.css'


export interface Post {
  title: string;
  thought: string;
}

export default function SocialPosts() {
  const [postInList, setPostInList] = useState<Post[]>([]);
  const [isActive, setIsActive] = useState(false);

  function handleSubmit(post: Post) {
    setPostInList([post, ...postInList]);
  };

  function handleDelete(title: string) {
    setPostInList(postInList.filter((post) => post.title !== title));
  };

  function handleClick() {
    setIsActive(current => !current);
  }

  return (
    
    <div className='main-content'>
      <button className='new-thought-btn' onClick={handleClick}>New Thought</button>
      <div className='form'>
      {isActive && <PostForm onSubmit={handleSubmit} />}
      <PostInList postList={postInList} onDelete={() => handleDelete} />
      </div>
    </div>
  )
}
