
import { text } from "azle/experimental";
import { Profile } from "../data/DataType";
import { ProfileStorage } from "../storage/Storage";

const userTaken =(email:text)=>{
    const users = ProfileStorage.values();
    if(users.length == 0){
        return 0
    }else {
        return users.map((user:Profile)=> user.Email).includes(email) 
    }

}

export {
    userTaken
}