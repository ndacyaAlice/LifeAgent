import { HttpAgent, Actor } from "@dfinity/agent";
/**
 * This file is generated from the backend.did file.
 * This file is used to import the backend.did file.
 * @type {import("../../../declarations/backend/backend.did").idlFactory}
 * Is  automatically generated from after successfully deploying the backend canister.
 */
import { idlFactory } from "../../../declarations/backend/backend.did.js"

/**
 * The canister ID of the LifeAgent canister.
 * This is the canister ID of the LifeAgent canister deployed on the local network.
 * Generated after deploying the project locally.
 * @type {string}
 */

const LifeAgentCANISTER_ID = "bkyz2-fmaaa-aaaaa-qaaaq-cai";

/**
 * This function is used to get the LifeAgent canister.
 * To expose the backend function to the frontend.
 * @returns {Promise<import("../../../declarations/backend/backend.did").LifeAgent}
*/
export const LifeAgentCanister=async()=>{
 return await getCanister(LifeAgentCANISTER_ID,idlFactory);
}

/** 
 * This function return the Actor object of the canister.
 * @param {string} canisterId The canister ID of the canister.
 * which is used by LifeAgentCanister function.
 * @param {import("@dfinity/agent").idlFactory} idl The interface description language.
*/
const getCanister=async(canisterId,idl)=>{
  const authClient = window.auth.client;
  const agent = new HttpAgent({
    identity: authClient.getIdentity(),
  });
  await agent.fetchRootKey();
  return Actor.createActor(idl,{
    agent,
    canisterId
  });
}
