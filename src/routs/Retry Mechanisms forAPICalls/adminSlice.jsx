
/*

1. Error Handling and Retry Mechanisms for API Calls
We'll use axios for making API calls and add interceptors to handle errors and retries.


In this setup, if an API request fails with a 500 status code, it will automatically retry once. You can adjust this logic based on your requirements.

2. Optimistic UI Updates
Optimistic UI updates assume the API call will succeed and immediately update the UI, rolling back if the call fails.

Example: Optimistic UI Update in User Deletion
We'll enhance the AdminDashboard component to show optimistic UI updates when deleting a user.



Summary
Error Handling and Retry Mechanisms: Implemented using axios interceptors to retry failed requests.

Optimistic UI Updates: Implemented in the AdminDashboard component to immediately reflect changes and rollback if the API call fails.

*/
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from './axiosInstance';

export const fetchUsers = createAsyncThunk('admin/fetchUsers', async () => {
  const response = await axiosInstance.get('/admin/users');
  return response.data;
});

export const deleteUserOptimistic = createAsyncThunk(
  'admin/deleteUserOptimistic',
  async (userId, { getState, dispatch, rejectWithValue }) => {
    const originalState = getState().admin.users;
    dispatch(adminSlice.actions.removeUser(userId));
    try {
      await axiosInstance.delete(`/admin/users/${userId}`);
    } catch (err) {
      dispatch(adminSlice.actions.setUsers(originalState));
      return rejectWithValue(err.response.data);
    }
  }
);

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    users: [],
    logs: [],
  },
  reducers: {
    removeUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(deleteUserOptimistic.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default adminSlice.reducer;
