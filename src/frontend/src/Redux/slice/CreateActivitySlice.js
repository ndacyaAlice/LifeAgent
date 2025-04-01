import { createSlice } from "@reduxjs/toolkit";
import { createActivityThunk } from "../action/createActivity";

const initialState = {
    load: false,
    createActivity: null,
    error: null,
}

const createActivitySlice= createSlice({
    name: "createActivity",
    initialState,
    reducers: {

    },

    extraReducers: {
      [createActivityThunk.pending] : (state) =>{
        return{
            ...state,
            load: true
        }
      },
      [createActivityThunk.rejected]:(state,{payload}) =>{
        return {
            ...state,
            load:false,
            error:payload
        }
      },
      [createActivityThunk.fulfilled]: (state,{payload}) => {
        return {
            ...state,
            load: false,
            createActivity: payload
        }
      }  
    }
})

export default createActivitySlice.reducer