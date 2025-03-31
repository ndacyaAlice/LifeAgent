import { createSlice } from "@reduxjs/toolkit";
import { getDocumentsThunk } from "../action/getDocumentsByRecord";


const initialState = {
    loadz: false,
    getDocuments: null,
    errorz: null,
}

const getDocumentsSlice= createSlice({
    name: "getDocuments",
    initialState,
    reducers: {

    },

    extraReducers: {
      [getDocumentsThunk.pending] : (state) =>{
        return{
            ...state,
            loadz: true
        }
      },
      [getDocumentsThunk.rejected]:(state,{payload}) =>{
        return {
            ...state,
            loadz:false,
            errorz:payload
        }
      },
      [getDocumentsThunk.fulfilled]: (state,{payload}) => {
        return {
            ...state,
            loadz: false,
            Records: payload
        }
      }  
    }
})

export default  getDocumentsSlice.reducer