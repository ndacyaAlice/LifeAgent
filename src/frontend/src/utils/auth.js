import { AuthClient } from "@dfinity/auth-client";

/**
 * The maximum time to live for the authentication token.
 * This is set to 7 days in nanoseconds.
 * @type {bigint}
 * 
 * The identity provider URL.
 * This is the URL of the identity provider service.generated after deploying the project locally.
 * @type {string}
 */
const MAX_TTL = BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000);
const IDENTITY_PROVIDER = `http://be2us-64aaa-aaaaa-qaabq-cai.localhost:8000#authorize`;

/**
 * 
 * @returns {Promise<AuthClient>} The authentication client.
 * This creates a new authentication client.
 */

export const getAuthClient=async()=>{
    return await AuthClient.create();
}

/**
 * This function is used to login the user.
 * @returns {Promise<void>} The login function.
 */
export const login=async()=>{
  const authClient = window.auth.client;

  const isAuthenticated = await authClient.isAuthenticated();

  if(!isAuthenticated){
    await authClient?.login({
        maxTimeToLive: MAX_TTL,
        identityProvider: IDENTITY_PROVIDER,
        onSuccess: async()=>{
           window.auth.isAuthenticated = await authClient.isAuthenticated();
           await  window.location.reload();
            window.location.href = '/Profile';
           
        },
    });
  }
}
/** 
 * This function is used to logout the user.
 * @returns {Promise<void>} The logout function.
  */
export const logout=async()=>{   
    const authClient = window.auth.client;
    authClient.logout();
    window.location.reload();

}
