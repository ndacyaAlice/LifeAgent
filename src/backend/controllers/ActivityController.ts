import { Err,Ok,ic } from "azle/experimental";
import { v4 as uuidv4 } from "uuid";
import { ActivityPayload,Activity } from "../data/DataType";
import { ActivityStorage, RecordStrorage } from "../storage/Storage";
import getCurrentDate from "../utils/timestamp";
/**
 * Create the Activity
 * Update the activity
 * Get activities by Document
 * Delete Activity
 */

class ActivityController {
  static Activity = (payload: ActivityPayload) => {
    try {
      const {
         RecordId,
         DocumentId,
         Activities: { columns, tasks },
      } = payload
        
      if(!RecordId || !DocumentId || !columns || !tasks) {
        return Err({ InvalidPayload: "Missing required fields" });
      }
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

      const NewActivity: Activity = {
        ActivityId: uuidv4(),
        RecordId,
        DocumentId,
        Activities: {
          columns,
          tasks,
        },
        CreatedAt: getCurrentDate(),
        UpdatedAt: getCurrentDate(),
    
      };
    
      // Save the activity
      ActivityStorage.insert(NewActivity.ActivityId, NewActivity);
      return Ok("Activity created!!!")
    } catch (error: any) {
      console.log(error);
      return Err({ Error: `Error occurred: ${error.message}` });
    }
  }
  static getActivitiesByDocument = (DocumentId: string) => {
    try {
      const activities = ActivityStorage.values().filter((activity) => activity.DocumentId === DocumentId);
      if (activities.length === 0) {
        return Err({ NotFound: "No activities found for this document." });
      }
      return Ok(activities[0].Activities);
    } catch (error: any) {
      console.log(error);
      return Err({ Error: `Error occurred: ${error.message}` });
    }
  }

}

export default ActivityController;