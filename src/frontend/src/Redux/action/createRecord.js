import { createAsyncThunk } from "@reduxjs/toolkit";
import { ToastError, ToastSuccess } from "../../utils/toast";
import { createRecord } from "../../utils/endpoints";

export const CreateRecordThunk = createAsyncThunk("CreateRecord",
async(data,{rejectWithValue})=>{
    try{
       const repo = await createRecord(data);
       if(repo.Ok){
        ToastSuccess("Create successfully")
        // setTimeout(()=>{
        //     window.location.reload()
        // }, 5000)
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