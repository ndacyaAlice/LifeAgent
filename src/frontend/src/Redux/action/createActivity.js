import { createAsyncThunk } from "@reduxjs/toolkit";
import { ToastError, ToastSuccess } from "../../utils/toast";
import { Activity } from "../../utils/endpoints";

export const createActivityThunk = createAsyncThunk("createActivity",
async(data,{rejectWithValue})=>{
    try{
       const repo = await  Activity(data);
       if(repo.Ok){
        ToastSuccess("Create successfully")
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