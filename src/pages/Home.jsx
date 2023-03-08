import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addPost, deletePost, fetchData } from '../features/posts/postsSlice'

const Home = () => {
    const dispatch = useDispatch()
    const postsList = useSelector((state) => state.posts.posts)
    const status = useSelector((state) => state.posts.status)

    console.log(status);
    

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [userId, setUserId] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
        userId,
        title,
        body,
        }
        dispatch(addPost(data))
    }

    const handleDelete = (id) => {
      dispatch(deletePost(id))
    };

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

  return (
    <div>
        <h1>LEARN REDUXTOOLKIT</h1>
      <ul>
        {postsList.map((post) => (
          <li key={post.id}>{post.title} <Link to={"/update/"+ post.id} >Edit</Link> <button onClick={() => handleDelete(post.id)}>Delete</button></li>
        ))}
        
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">UserId:</label>
          <input
            type="number"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button type="submit">Add post</button>
      </form>
    </div>
  )
}

export default Home