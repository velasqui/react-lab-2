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
  const [isModalOpen, setModalState] = useState(false);

  function handleSubmit(post: Post) {
    setPostInList([post, ...postInList]);
  };

  function handleDelete(title: string) {
    setPostInList(postInList.filter((post) => post.title !== title));
  };

  const toggleModal = () => setModalState(!isModalOpen);

  return (
    <div className='main-content'>
      <button className='new-thought-btn' onClick={toggleModal}>New Thought</button>
      {isModalOpen && <PostForm isOpen={isModalOpen} onClose={toggleModal} onSubmit={handleSubmit} />}
      <PostInList post={postInList} onDelete={handleDelete} />
    </div>
  )
}
