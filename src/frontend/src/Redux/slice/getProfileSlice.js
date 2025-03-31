import { createSlice } from "@reduxjs/toolkit";
import { getProfileThunk } from "../action/getProfile";


const initialState = {
    loadz: false,
    getProfile: null,
    errorz: null,
}

const getProfileSlice= createSlice({
    name: "GetProfile",
    initialState,
    reducers: {

    },

    extraReducers: {
      [getProfileThunk.pending] : (state) =>{
        return{
            ...state,
            loadz: true
        }
      },
      [getProfileThunk.rejected]:(state,{payload}) =>{
        return {
            ...state,
            loadz:false,
            errorz:payload
        }
      },
      [getProfileThunk.fulfilled]: (state,{payload}) => {
        return {
            ...state,
            loadz: false,
            Records: payload
        }
      }  
    }
})

export default  getProfileSlice.reducer