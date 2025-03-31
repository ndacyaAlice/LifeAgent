import { createAsyncThunk } from "@reduxjs/toolkit";
import { ToastError, ToastSuccess } from "../../utils/toast";
import { getDocumentsByRecord } from "../../utils/endpoints";

export const getDocumentsThunk = createAsyncThunk("getDocuments",
async(data,{rejectWithValue})=>{
    try{
        const { RecordId } = data
       const repo = await getDocumentsByRecord(RecordId);
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