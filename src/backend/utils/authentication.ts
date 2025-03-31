
import { text } from "azle/experimental";
import { Profile } from "../data/DataType";
import { ProfileStorage } from "../storage/Storage";

const userTaken =(Username:text)=>{
    const users = ProfileStorage.values();
   
   return users.map((user:Profile)=> user.Username).includes(Username) 
    

}

export {
    userTaken
}