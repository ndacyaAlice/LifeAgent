import { Canister, query, Result, text,Vec, update } from 'azle/experimental';
import { ActivitiesData, Activity, ActivityPayload, Document, DocumentPayload, Message, Profile, ProfilePayload, RecordPayload, Records } from './data/DataType';
import ProfileController from './controllers/ProfileController';
import RecordController from './controllers/RecordController';
import ActivityController from './controllers/ActivityController';

export default Canister({
  // Profile Controller Functions
    createProfile: update([ProfilePayload],Result(text, Message), (payload) =>{
      return ProfileController.createProfile(payload);     
    }),
    getProfile: query([], Result(Profile, Message), () => {
      return ProfileController.getProfile(); 
    }),
  

    // Record Controller Functions
    createRecord: update([RecordPayload], Result(text, Message), (payload) => {
      return RecordController.createRecord(payload); 
    }),
    getRecordPerUser: query([], Result(Vec(Records), Message), () => {
      return RecordController.GetRecordPerUser(); 
    }),
    
    // Document Controller Functions
    createDocument: update([DocumentPayload], Result(text, Message), (payload) => {
      return RecordController.createDocument(payload); 
    }),

    getDocumentsByRecord: query([text], Result(Vec(Document), Message), (recordId) => {
      return RecordController.getDocumentsByRecord(recordId); 
    }),
    getOneDocument: query([text, text], Result(Document, Message), (RecordId, DocumentId) => {
      return RecordController.getOneDocument(RecordId, DocumentId); 
    }),
    // Activity Controller Functions
    
    Activity: update([ActivityPayload], Result(text, Message), (payload) => {
      return ActivityController.Activity(payload); 
    }),
    getActivitiesByDocument: query([text], Result(ActivitiesData, Message), (DocumentId) => {
      return ActivityController.getActivitiesByDocument(DocumentId); 
    }),
});

      