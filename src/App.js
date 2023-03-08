import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { addPost, fetchData, setPosts } from './features/posts/postsSlice';
import { ROUTE_URL } from './routes/Routes';

function App() {
  const dispatch = useDispatch()
  const postsList = useSelector((state) => state.posts.posts)
  const status = useSelector((state) => state.posts.status)


  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  

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

  return (
    <div className="App">
      
          <Routes>
          {
            ROUTE_URL.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))
          }
          </Routes>
    </div>
  );
}

export default App;
