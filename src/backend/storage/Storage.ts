import { Principal, StableBTreeMap,text } from "azle/experimental";
import { Activity, Profile, Records } from "../data/DataType";


const ProfileStorage = StableBTreeMap<Principal,Profile>(0);
const RecordStrorage = StableBTreeMap<text, Records>(1)
const ActivityStorage = StableBTreeMap<text, Activity>(2)


export {
     ProfileStorage,
     RecordStrorage,
     ActivityStorage
}