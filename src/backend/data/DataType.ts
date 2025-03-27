import { Record, text, Variant , Vec, Principal, nat32 } from "azle/experimental";

// __________Profile DataType__________

export const Profile = Record({
    FirstName: text,
    SecondName: text,
    Gender: text,
    Age: text,
    Weight: text,
    Height:text,
    Email: text,
    Owner: Principal,
    CreatedAt: text,
    UpdatedAt: text

})

export type Profile = typeof Profile.tsType

export const ProfilePayload = Record({
    FirstName: text,
    SecondName: text,
    Gender: text,
    Age: text,
    Weight: text,
    Height:text,
    Email: text
})

export type ProfilePayload = typeof ProfilePayload.tsType


// _________Document DataType__________

export const DocumentPayload =  Record({
    DocName: text,
    DocFile: text,
    RecordId: text,
    DocDescription: text,
})

export type DocumentPayload  = typeof DocumentPayload.tsType

export const  Document =Record({
    DocumentId: text,
    DocName: text,
    DocFile: text,
    DocDescription: text,
    CreatedAt: text,
    UpdatedAt: text

});
export type Document  = typeof Document.tsType

// _________Activity DataType_________
export const column = Record({
    ColumnId: text,
    Title: text,
})
export type column = typeof column.tsType

export const Task = Record({
    TaskId: text,
    columnId: text,
    content: text,
    CreatedAt: text,
    UpdatedAt: text
    
})
export type Task = typeof Task.tsType

export const ActivitiesData = Record({
    columns: Vec(column),
    tasks: Vec(Task),
   })
export type ActivitiesData = typeof ActivitiesData.tsType

export const ActivityPayload  = Record({
   RecordId: text,
   DocumentId: text,
   Activities: ActivitiesData
})

export type ActivityPayload  = typeof ActivityPayload.tsType

export const Activity = Record({
    ActivityId: text,
    RecordId: text,
    DocumentId: text,
    Activities: Record({
        columns: Vec(column),
        tasks: Vec(Task),
    }),
    CreatedAt: text,
    UpdatedAt: text
})

export type Activity  = typeof Activity.tsType

// __________Record DataType__________

export const RecordPayload = Record({
    RecordName: text,
})
export type RecordPayload  = typeof RecordPayload.tsType

export const Records = Record({
    RecordName: text,
    RecordId:text,
    RecordOwer: Principal,
    Documents: Vec(Document),
    CreatedAt: text,
    UpdatedAt: text

})
export type Records = typeof Records.tsType




// ________Error message DataType__________

export const Message = Variant({
    NotFound: text,
    InvalidPayload: text,
    Error: text,
    NoProfile: text,
    Unauthorized: text
})
export type Message = typeof Message.tsType