// menuSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchMenu = createAsyncThunk('menu/fetchMenu', async () => {
  const response = await axios.get('http://localhost:5000/menu.json');
  return response.data; 
});

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default menuSlice.reducer;
