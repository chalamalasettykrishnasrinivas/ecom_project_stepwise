import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from '../../api/api';
export const admin_login = createAsyncThunk(
    "auth/admin_login",
    async(info) => {
        //console.log("Admin Login Info:", info);
        try {
            const {data} = await api.post('/admin-login', 
                info,{withCredentials: true});
                console.log("Admin Login Response:", data);
        } 
        catch (error) {
            console.log("Error in admin login:", error.response.data);
        }
    }

) 

export const authReducer = createSlice({
    name: 'auth',
    initialState: { 
        successMessage: '',
        errorMessage: '',
        loader: false,
        userInfo: "",
    },
    reducers: {

    },
    extraReducers:() => {

    }

})

export default authReducer.reducer;

