import { createAsyncThunk } from "@reduxjs/toolkit";
import { ToastError, ToastSuccess } from "../../utils/toast";
import { getRecordPerUser } from "../../utils/endpoints";

export const getRecordsThunk = createAsyncThunk("GetRecords",
async(data,{rejectWithValue})=>{
    try{
       const repo = await getRecordPerUser();
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