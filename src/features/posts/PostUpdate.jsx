import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchOneData, updatePost } from './postsSlice';

const PostUpdate = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const postSingle = useSelector((state) => state.posts.posts)

    useEffect(() => {
      dispatch(fetchOneData(id))
    },[dispatch, id])

    const [title, setTitle] = useState(postSingle.title)
    const [body, setBody] = useState(postSingle.body)
    const [userId, setUserId] = useState(postSingle.userId)

    const handleSubmit = async (event) => {
      event.preventDefault()
  
      // const formData = new FormData(event.target)
      // const title = formData.get('title')
      // const body = formData.get('body')
  
      await dispatch(updatePost({ id: id, data: { title, body, userId } }))
    }
  return (
    <div>
      PostUpdate
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
  );
}

export default PostUpdate