import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "./infoSlice";
import toast from "react-hot-toast"


const initialState = {
    loading : false,
    isLogged : false,
    data : null,
}


export const login = createAsyncThunk("login" , async (data) => {
    try {
        const response = await Api.post("/user/login" , data);
        console.log(response.data)
        toast.success(response.data?.message)
        return response.data;
    } catch (error) {
        toast.error(error.response?.data?.message)
    }
})

export const getUser = createAsyncThunk("getUser" , async () => {
    try {
        const response = await Api.get("/user");
        return response.data;
    } catch (error) {
        toast.error(error.response?.data?.message)
    }
})

export const logout = createAsyncThunk("logout" , async () => {
    try {
        const response = await Api.get("/user/logout");
        toast.success(response.data?.message)
        return response.data;
    } catch (error) {
        toast.error(error.response?.data?.message)
        console.log(error.payload?.data?.message)
    }
})

export const changePassword = createAsyncThunk("changePassword" , async (data) => {
    console.log(data)
    try {
        const response = await Api.post("/user/changePass", data);
        toast.success(response.data?.message)
        return response.data;
    } catch (error) {
        toast.error(error.response?.data?.message)
    }
})


const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.isLogged = true;
            state.data = action.payload?.data;
        })
        builder.addCase(login.rejected, (state) => {
            state.loading = false;
        })
        builder.addCase(getUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.loading = false;
            state.isLogged = true;
            state.data = action.payload?.data;
        })
        builder.addCase(getUser.rejected, (state) => {
            state.loading = false;
        })
        builder.addCase(logout.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(logout.fulfilled, (state, action) => {
            state.loading = false;
            state.isLogged = false;
            state.data = null;
        })
        builder.addCase(logout.rejected, (state) => {
            state.loading = false;
        })
        builder.addCase(changePassword.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(changePassword.fulfilled, (state, action) => {
            state.loading = false;
        })
        builder.addCase(changePassword.rejected, (state) => {
            state.loading = false;
        })
    },
})


export default userSlice.reducer