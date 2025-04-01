import { configureStore } from '@reduxjs/toolkit';
import CreateRecordSlice from '../slice/CreateRecordSlice';
import getRecordsSlice from '../slice/getRecordsSlice';
import getDocumentsSlice from '../slice/getDocumentsSlice';
import CreateProfileSlice from '../slice/CreateProfileSlice';
import getProfileSlice from '../slice/getProfileSlice'
import CreateDocSlice from "../slice/CreateDocSlice";
import createActivitySlice from '../slice/CreateActivitySlice';

const store = configureStore({
	reducer: {
		CreateProfile: CreateProfileSlice,
		GetProfile: getProfileSlice,
		
		CreateRecord: CreateRecordSlice,
		GetRecords: getRecordsSlice,

		GetDocuments: getDocumentsSlice,
		CreateDoc: CreateDocSlice, 
		createActivity: createActivitySlice,
		
	},
});

export default store;
