import { createAsyncThunk } from "@reduxjs/toolkit";
import { ToastError } from "../../utils/toast";
import  { getProfile } from "../../utils/endpoints"

export const getProfileThunk = createAsyncThunk("GetProfile",
async(data,{rejectWithValue})=>{
    try{
       const repo = await getProfile();
       if(repo.Ok){
        return repo.Ok
       }else if(repo.Err){
        {repo.Err.Error && ToastError(repo.Err.Error)}
        return rejectWithValue(repo.Err)
       }

    }catch(error){
        return rejectWithValue(error.Err)
    }
}
);