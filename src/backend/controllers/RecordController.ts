import { Err, Ok, ic } from "azle/experimental";
import { DocumentPayload, RecordPayload, Records } from "../data/DataType";
import { v4 as uuidv4 } from 'uuid';
import getCurrentDate from "../utils/timestamp";
import { RecordStrorage } from "../storage/Storage";
/**
 
 * Create record
 * Get record per user
 * Create the Document
 * Get Documents by Record
 * Get One Document
 
 */

class RecordController {
    static createRecord=(payload:RecordPayload)=>{
        try{
            const { RecordName } = payload;
            if(!RecordName){
                return Err({ InvalidPayload: "Missing required fields" }); 
            }
            if(RecordStrorage.values().find((record)=>(record.RecordName === RecordName))) {
                return Err({ Error: "Record already exist" }); 
            }
            const NewRecord: Records = {
                RecordName,
                RecordId: uuidv4(),
                RecordOwer: ic.caller(),
                Documents: [],
                CreatedAt: getCurrentDate(),
                UpdatedAt: getCurrentDate() 
            }
            //save the record
            RecordStrorage.insert(NewRecord.RecordId,NewRecord)
            return Ok("Record created!!!")
        }catch(error: any){
            console.log(error);
            return Err({ Error: `Error occurred: ${error.message}` }); 
        }  
    }

    static GetRecordPerUser=()=>{
        try{
            const RecordOpt = RecordStrorage.values();
            if(RecordOpt.length === 0){
                return Err({ NotFound: "No Record found" }); 
            }
            const recordPerUser = RecordOpt.filter((record)=>(JSON.stringify(record.RecordOwer) === JSON.stringify(ic.caller())));
            return Ok(recordPerUser)
        }catch(error: any){
            console.log(error);
            return Err({ Error: `Error occurred: ${error.message}` }); 
        }  
    }
    static createDocument = (payload: DocumentPayload) => {
        try {
            const { DocName, DocFile, DocDescription, RecordId } = payload;
    
            // Validate required fields
            if (!DocName || !DocFile || !DocDescription ||  RecordId) {
                return Err({ InvalidPayload: "Missing required fields" });
            }
    
            // Find the record to which the document belongs
            const record = RecordStrorage.values().find((record) => (record.RecordOwer === ic.caller()) && (record.RecordId === RecordId));
            if (!record) {
                return Err({ NotFound: "No record found for the current user." });
            }
            // Check for duplicate document
            const isDuplicate = RecordStrorage.values().some((record) =>(
                record.Documents.some((doc) => doc.DocName === DocName))
            );
            if (isDuplicate) {
                return Err({ Error: "Document already exists" });
            }
    
            // Validate Base64 image format
            if (!DocFile.startsWith("data:image/")) {
                return Err({ message: "Invalid image format. Must be a Base64-encoded image." });
            }
    
            // Extract MIME type and validate Base64 structure
            const mimeTypeMatch = DocFile.match(/^data:(image\/\w+);base64,/);
            if (!mimeTypeMatch) {
                return Err({ message: "Invalid image format. Base64 structure is incorrect." });
            }
    
    
            // Create the document object adhering to the `Document` data type
            const newDocument = {
                DocumentId: uuidv4(),        
                DocName,              
                DocFile,                     // Store the full Base64-encoded string
                DocDescription,              
                CreatedAt: getCurrentDate(), 
                UpdatedAt: getCurrentDate(), 
            };
    
            
            // Add the document to the record
            record.Documents.push(newDocument);
            RecordStrorage.insert(record.RecordId, record);
    
            return Ok("Document created successfully!");
        } catch (error: any) {
            console.error(error);
            return Err({ Error: `Error occurred: ${error.message}` });
        }
    };

    static getDocumentsByRecord = (RecordId: string) => {
        try {
            // Find the record to which the document belongs
            const record = RecordStrorage.values().find((record) => (record.RecordOwer === ic.caller()) && (record.RecordId === RecordId));
            if (!record) {
                return Err({ NotFound: "No record found for the current user." });
            }
    
            return Ok(record.Documents);
        } catch (error: any) {
            console.error(error);
            return Err({ Error: `Error occurred: ${error.message}` });
        }
    }
    
    static getOneDocument = (RecordId: string, DocumentId: string) => {
        try {
            // Find the record to which the document belongs
            const record = RecordStrorage.values().find((record) => (record.RecordOwer === ic.caller()) && (record.RecordId === RecordId));
            if (!record) {
                return Err({ NotFound: "No record found for the current user." });
            }
    
            // Find the document by ID
            const document = record.Documents.find((doc) => doc.DocumentId === DocumentId);
            if (!document) {
                return Err({ NotFound: "Document not found." });
            }
    
            return Ok(document);
        } catch (error: any) {
            console.error(error);
            return Err({ Error: `Error occurred: ${error.message}` });
        }
    }

    
}

export default RecordController