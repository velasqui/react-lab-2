import { Post } from './SocialPosts'
import './PostInList.css'

interface PostListProps {
    postList: Post[];
    onDelete: () => void;
}

export default function PostInList({ postList, onDelete}: PostListProps) {


  return (
    <div className='post-list'>
      <div>
          <h3>Trip Ideas</h3>
          <p>Cruise with the boyos</p>
          <div className="material-symbols-outlined">delete</div>
      </div>
      {postList.map((post) => (
        <div>
          <h3>{post.title}</h3>
          <p>{post.thought}</p>
          <span className="material-symbols-outlined">delete</span>
        </div>
      ))}
    </div>
  )
}
