import { createAsyncThunk } from "@reduxjs/toolkit";
import { ToastError, ToastSuccess } from "../../utils/toast";
import  { createProfile } from "../../utils/endpoints"

export const CreateProfileThunk = createAsyncThunk("CreateProfile",
async(data,{rejectWithValue})=>{
    try{
       const repo = await createProfile(data);
       if(repo.Ok){
        ToastSuccess("Create successfully")
        setTimeout(()=>{
            window.location.href="/Dashboard"
        }, 5000)
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