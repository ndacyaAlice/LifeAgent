import { createSlice } from "@reduxjs/toolkit";
import { CreateDocThunk } from "../action/createDoc";

const initialState = {
    load: false,
    CreateDoc: null,
    error: null,
}

const CreateDocSlice= createSlice({
    name: "CreateDoc",
    initialState,
    reducers: {

    },

    extraReducers: {
      [CreateDocThunk.pending] : (state) =>{
        return{
            ...state,
            load: true
        }
      },
      [CreateDocThunk.rejected]:(state,{payload}) =>{
        return {
            ...state,
            load:false,
            error:payload
        }
      },
      [CreateDocThunk.fulfilled]: (state,{payload}) => {
        return {
            ...state,
            load: false,
            CreateDoc: payload
        }
      }  
    }
})

export default CreateDocSlice.reducer