import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    loading: false,
};

export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
});

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //HTTP isteği olmadığında kullanılır

    },
    extraReducers: (builder) => {
        //HTTP isteği olduğunda kullanılır
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });
        builder.addCase(getAllUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllUsers.rejected, (state) => {
            state.loading = false;
        });
    },
});
export const { setUsers, setLoading } = userSlice.actions;
export default userSlice.reducer;




    


