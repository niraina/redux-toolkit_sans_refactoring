import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("postsSlice/fetchData", async () => {
  const response = await axios.get("http://localhost:5000/posts");
  return response.data;
});

export const fetchOneData = createAsyncThunk(
  "postsSlice/fetchOneData",
  async (id) => {
    const response = await axios.get(`http://localhost:5000/posts/${id}`);
    return response.data;
  }
);

// Créer l'action asynchrone pour ajouter un nouveau post
export const addPost = createAsyncThunk("posts/addPost", async (data) => {
  const response = await axios.post("http://localhost:5000/posts", data);
  return response.data;
});

// Créer l'action asynchrone pour mettre à jour un post existant
export const updatePost = createAsyncThunk("posts/updatePost", async ({ id, data }) => {
  const response = await axios.put(`http://localhost:5000/posts/${id}`, data );
  return response.data;
});

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id) => {
    await axios.delete(`http://localhost:5000/posts/${id}`)
    return id
  }
)

const initialState = {
    posts: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}
const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers(builder) {
    builder

//findall
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })


//findbyid
      .addCase(fetchOneData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOneData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchOneData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })


//add
      .addCase(addPost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })



//update
      .addCase(updatePost.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.posts = action.payload;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })



//delete
      .addCase(deletePost.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.posts = state.posts.filter((post) => post.id !== action.payload);
        
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});

export const { posts } = postsSlice.actions
export default postsSlice.reducer