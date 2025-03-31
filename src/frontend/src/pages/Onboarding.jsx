import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch,useSelector} from "react-redux";
import { useForm } from 'react-hook-form';
import { ProfileValid } from "../validation/ProfileValid";
import { CreateProfileThunk } from "../Redux/action/createProfile";
import { IconProgress } from "@tabler/icons-react";

const Onboarding = () => {

  const { 
    register, 
    control,
    handleSubmit, 
    formState: { errors } } = useForm({
    resolver: yupResolver(ProfileValid),
  });
  const dispatch = useDispatch();

  const submit=(data)=>{
    console.log(data)
    const cleanData={
      ...data,  
      Age:String(data.Age),
      Weight:String(data.Weight),
      Height:String(data.Height),
    }
     dispatch(CreateProfileThunk(cleanData))
  }
  const { load, profile, error } = useSelector((state)=>state.CreateProfile)
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#13131a]">
      <div className="w-full max-w-md rounded-xl bg-[#1c1c24] p-8 shadow-lg">
        <h2 className="mb-2 text-center text-5xl font-bold text-white">👋 </h2>
        <h2 className="mb-6 text-center text-2xl font-bold text-white">
          Welcome! Let's get started
        </h2>
        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-4">
            <label
              htmlFor="Username"
              className="mb-2 block text-sm text-gray-300"
            >
              Username
            </label>
            <input
              id="Username"
              type="text"
              {...register('Username')} 
               placeholder="Username"
              required
              className="w-full rounded-lg bg-neutral-900 p-2 text-neutral-400 focus:border-blue-600 focus:outline-none"
            />
             {errors.Username && <p className="text-red-500">{errors.Username.message}</p>}
          </div>
          <div className="mb-4">
            <label
              htmlFor="Gender"
              className="mb-2 block text-sm text-gray-300"
            >
              Gender
            </label>
            <input
              id="Gender"
              type="text"
              {...register('Gender')}
              placeholder="Gender" 
              required
              className="w-full rounded-lg bg-neutral-900 p-2 text-neutral-400 focus:border-blue-600 focus:outline-none"
            />
             {errors.Gender && <p className="text-red-500">{errors.Gender.message}</p>}
          </div>
          <div className="mb-4">
            <label
              htmlFor="Age"
              className="mb-2 block text-sm text-gray-300"
            >
              Age
            </label>
            <input
              id="Age"
              type="number"
              {...register('Age')}
              placeholder="Age" 
              required
              className="w-full rounded-lg bg-neutral-900 p-2 text-neutral-400 focus:border-blue-600 focus:outline-none"
            />
             {errors.Age && <p className="text-red-500">{errors.Age.message}</p>}
          </div> 
          <div className="mb-4">
            <label
              htmlFor="Weight"
              className="mb-2 block text-sm text-gray-300"
            >
              Weight
            </label>
            <input
              id="Weight"
              type="number"
              {...register('Weight')}
              placeholder="Weight" 
              required
              className="w-full rounded-lg bg-neutral-900 p-2 text-neutral-400 focus:border-blue-600 focus:outline-none"
            />
             {errors.Weight && <p className="text-red-500">{errors.Weight.message}</p>}
          </div> 
          <div className="mb-4">
            <label
              htmlFor="Height"
              className="mb-2 block text-sm text-gray-300"
            >
              Height
            </label>
            <input
              id="Height"
              type="number"
              {...register('Height')}
              placeholder="Height" 
              required
              className="w-full rounded-lg bg-neutral-900 p-2 text-neutral-400 focus:border-blue-600 focus:outline-none"
            />
             {errors.Height && <p className="text-red-500">{errors.Height.message}</p>}
          </div> 
          <button
            type="submit"
            disabled={load}
            className="mt-4 w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {load?
            <IconProgress size={10} className="mr-3 h-5 w-5 animate-spin"
/>:"Get Started"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Onboarding;
