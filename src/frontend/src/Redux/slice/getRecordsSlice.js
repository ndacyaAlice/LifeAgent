import { createSlice } from "@reduxjs/toolkit";
import { getRecordsThunk } from "../action/getRecords";


const initialState = {
    loads: false,
    Records: null,
    errors: null,
}

const getRecordsSlice= createSlice({
    name: "getRecords",
    initialState,
    reducers: {

    },

    extraReducers: {
      [getRecordsThunk.pending] : (state) =>{
        return{
            ...state,
            loads: true
        }
      },
      [getRecordsThunk.rejected]:(state,{payload}) =>{
        return {
            ...state,
            loads:false,
            errors:payload
        }
      },
      [getRecordsThunk.fulfilled]: (state,{payload}) => {
        return {
            ...state,
            loads: false,
            Records: payload
        }
      }  
    }
})

export default  getRecordsSlice.reducer