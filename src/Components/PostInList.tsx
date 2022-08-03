import { Post } from './SocialPosts'
import './PostInList.css'
import { AiFillDelete } from 'react-icons/ai'

interface PostListProps {
    post: Post[];
    onDelete: (title: string) => void;
}

export default function PostInList({ post, onDelete}: PostListProps) {


  return (
    <div className='post-list'>
      {/* <div className='post'>
          <h3 className='post-title'>Grand Circus</h3>
          <p className='post-thought'>Grand Circus is awesome!</p>
          <button className="delete-post-icon" onClick={() => onDelete(postList.title)}>
            <AiFillDelete />
          </button>
      </div> */}
      {post.map((post) => (
        <div className='post'>
          <div className='post-content'>
            <h2 className='post-title'>{post.title}</h2>
            <p className='post-thought'>{post.thought}</p>
          </div>
          <span className="delete-post-icon" onClick={() => onDelete(post.title)}>
            <AiFillDelete size={20}/>
          </span>
        </div>
      ))}
    </div>
  )
}
