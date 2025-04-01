import { v4 as uuidv4 } from "uuid";
import { Err,Ok, ic } from "azle/experimental";
import { Profile, ProfilePayload } from "../data/DataType";
import { userTaken } from "../utils/authentication";
import getCurrentDate from "../utils/timestamp";
import { ProfileStorage } from "../storage/Storage";


class ProfileController {
    static createProfile = (payload:ProfilePayload)=>{
        try{
         const {
              Username,
              Gender,
              Age,
              Weight,
              Height,
         } = payload;

         if(!Username || !Gender || !Age ||   !Weight || !Height ){
            return Err({ InvalidPayload: "Missing required fields" }); 
        }
        if (userTaken(Username)) {
            return Err({ Error: "User already exists!!!" });
        } 

            const NewProfile:Profile = {
                Username,
                Gender,
                Age,
                Weight,
                Height,
                Owner: ic.caller(),
                CreatedAt: getCurrentDate(),
                UpdatedAt: getCurrentDate()
            }
            console.log(NewProfile)
            ProfileStorage.insert(ic.caller(),NewProfile)

          return Ok("Profile created!!!")    
        }catch(error: any){
            return Err({ Error: `Error occurred: ${error.message}` });
        }
    }

    static getProfile =()=> {
        try{
            const ProfileOpt = ProfileStorage.get(ic.caller());
         if(!ProfileOpt){
             return Err({NotFound:"Profile does not exist"})
            }
 
            console.log(ProfileOpt)
         return Ok(ProfileOpt)
        }catch(error: any) {
            return Err({ Error: `Error occurred: ${error.message}` }); 
        }
    }
}

export default ProfileController