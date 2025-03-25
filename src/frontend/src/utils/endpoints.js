
/**
 * These functions are used to call the backend functions.
 * 
 */

const onboarding=async(Profile)=>{ 
  return  await window.canister.LifeAgentApi.onboarding(Profile)
}

export { 
  onboarding
}



