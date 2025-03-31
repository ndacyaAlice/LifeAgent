import { createSlice } from "@reduxjs/toolkit";
import { CreateRecordThunk } from "../action/createRecord";


const initialState = {
    load: false,
    Record: null,
    error: null,
}

const CreateRecordSlice= createSlice({
    name: "createRecord",
    initialState,
    reducers: {

    },

    extraReducers: {
      [CreateRecordThunk.pending] : (state) =>{
        return{
            ...state,
            load: true
        }
      },
      [CreateRecordThunk.rejected]:(state,{payload}) =>{
        return {
            ...state,
            load:false,
            error:payload
        }
      },
      [CreateRecordThunk.fulfilled]: (state,{payload}) => {
        return {
            ...state,
            load: false,
            Record: payload
        }
      }  
    }
})

export default  CreateRecordSlice.reducer