import { LifeAgentCanister } from "./canister";
import { getAuthClient } from "./auth";
/**
 * This function is used load the smart contract utility on frontend end before react creates ui.
 * @returns {Promise<void>} The contract function.
 * you can console.log(window) to see the object of the window. 
 * The window object contains the auth object and canister object.
 * window.auth = {};
   window.canister = {}; This holds all functions of the canister(backend).
 */

export async function Contract(){
    const authClient = await getAuthClient();
    window.auth = {};
    window.canister = {};
    window.auth.client = authClient;
    window.auth.isAuthenticated = await authClient.isAuthenticated();
    window.auth.identity = authClient.getIdentity();
    window.auth.principal = authClient.getIdentity()?.getPrincipal();
    window.auth.principalText = authClient.getIdentity()?.getPrincipal().toText();
    window.canister.LifeAgentApi = await LifeAgentCanister();
}