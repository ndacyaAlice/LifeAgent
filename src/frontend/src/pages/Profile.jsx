import React, { useEffect } from "react";
import  { useDispatch, useSelector } from "react-redux";
import { getProfileThunk } from "../Redux/action/getProfile";

const Profile = () => {
  const dispatch = useDispatch();
   useEffect(()=>{
       const getProfile=()=>{
        dispatch(getProfileThunk())   
       }
       getProfile()
   },[dispatch])

   const  {  loadz,getProfile,errorz } = useSelector((state)=>state.GetProfile)

console.log(getProfile)
  return (
    <div className="mx-auto mt-16 max-w-lg rounded-lg bg-[#1c1c24] p-6 shadow-lg">
      <div className="flex flex-col items-center">
        <p className="mb-4 flex h-20 w-20 flex-row items-center justify-center rounded-full bg-[#0092F3]">
          <span className="text-6xl">😊</span>
        </p>
        <h1 className="mb-2 text-3xl font-semibold text-white">User Profile</h1>
        
        {loadz?(
          <div className="flex h-screen items-center justify-center">
          <div className="text-lg text-gray-500">Loading...</div>
        </div>
        ): !getProfile  || errorz ?(
          <div style={{textAlign: "center"}}>
          <p>No Profile or there is error! Reload</p>
    </div>
        ):
        (
          <div className="mt-4 w-full">
          <p className="mb-1 text-sm text-gray-400">Username:</p>
          <p className="mb-4 text-lg font-semibold text-white">
            {getProfile.Username}
          </p>

          <p className="mb-1 text-sm text-gray-400">Gender:</p>
          <p className="mb-4 text-lg font-semibold text-white">
            {getProfile.Gender}
          </p>

          <p className="mb-1 text-sm text-gray-400">Age:</p>
          <p className="mb-4 text-lg font-semibold text-white">
            {getProfile.Age}
          </p>

          <p className="mb-1 text-sm text-gray-400">Weight:</p>
          <p className="text-lg font-semibold text-white">
           {getProfile.Weight} kg
          </p>
          <p className="mb-1 text-sm text-gray-400">Height:</p>
          <p className="text-lg font-semibold text-white">
           {getProfile.Height} cm
          </p>
        </div>
        )}
       
      </div>
    </div>
  );
};

export default Profile;
