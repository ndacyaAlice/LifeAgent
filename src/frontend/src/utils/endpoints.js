
/**
 * These functions are used to call the backend functions.
 * 
 */
// Profile endpoint
const createProfile=async(Profile)=>{ 
  console.log("Profile", Profile)
  return  await window.canister.LifeAgentApi.createProfile(Profile)
}
const getProfile=async()=>{ 
  return  await window.canister.LifeAgentApi.getProfile()
}
// Record endpoint
const createRecord=async(Record)=>{ 
  return  await window.canister.LifeAgentApi.createRecord(Record)
}
const getRecordPerUser=async()=>{ 
  return  await window.canister.LifeAgentApi.getRecordPerUser()
}
// Document endpoint
const createDocument=async(Document)=>{ 
  const v= await window.canister.LifeAgentApi.createDocument(Document)
  console.log("Document", Document, v)

  return  await window.canister.LifeAgentApi.createDocument(Document)
}
const getDocumentsByRecord=async(RecordId)=>{ 
  return  await window.canister.LifeAgentApi.getDocumentsByRecord(RecordId)
}
const getOneDocument=async(RecordId, DocumentId)=>{ 
  return  await window.canister.LifeAgentApi.getOneDocument(RecordId, DocumentId)
}

// Activity endpoint
const Activity=async(payload)=>{ 
  return  await window.canister.LifeAgentApi.Activity(payload)
}
const getActivitiesByDocument=async(DocumentId)=>{ 
  return  await window.canister.LifeAgentApi.getActivitiesByDocument(DocumentId)
}



export { 
  createProfile,
  getProfile,

  createRecord,
  getRecordPerUser,

  createDocument,
  getDocumentsByRecord,
  getOneDocument,
  
  Activity,
  getActivitiesByDocument,
}



