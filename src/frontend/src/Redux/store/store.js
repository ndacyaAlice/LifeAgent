import { configureStore } from '@reduxjs/toolkit';
import CreateRecordSlice from '../slice/CreateRecordSlice';
import getRecordsSlice from '../slice/getRecordsSlice';
import getDocumentsSlice from '../slice/getDocumentsSlice';
import CreateProfileSlice from '../slice/CreateProfileSlice';
import getProfileSlice from '../slice/getProfileSlice'


const store = configureStore({
	reducer: {
		CreateProfile: CreateProfileSlice,
		GetProfile: getProfileSlice,
		
		CreateRecord: CreateRecordSlice,
		GetRecords: getRecordsSlice,

		GetDocuments: getDocumentsSlice
		
	},
});

export default store;
