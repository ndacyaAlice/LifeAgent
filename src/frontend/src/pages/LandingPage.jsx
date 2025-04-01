import React from 'react';
import { login } from '../utils/auth';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const navigate = useNavigate();
  const direct = () => {
    navigate('/Dashboard')
  }
  return (
    <div className="w-[80%] mx-auto  bg-[#13131a]">
    <div className="flex text-white">

      <div className="flex w-full h-screen basis-[1/2] ">
        <div className="mt-20">
          <h6 className="text-[60px] lg:text-[120px] leading-none font-serif tracking-wide mt-4">LIFE AGENT</h6>
         <p className="text-xl">Analyze instantly, stay secure.</p>
         <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400">
         "Empower your health with AI-driven insights on
          the blockchain. Our advanced AI agent securely 
          analyzes medical documents and food labels, 
          providing personalized treatment plans and health 
          activity recommendations, all while ensuring privacy
          and transparency through blockchain technology."
         </p>
        </div>
      </div>

      <div className="w-full h-full basis-full md:basis-[1/2] grow-0">
          <div className="mt-10 md:hidden text-center font-serif">
            <h6>LIFE AGENT</h6>
            <p>Analyze instantly, stay secure.</p>
         
          </div>
          <div className="mt-3 md:mt-20 flex flex-col items-center justify-center h-full">
             {window.auth.isAuthenticated ? (
              <button
              type="submit"
              onClick={direct}
              className="mt-4 w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
             Dashboard</button> ):
                <button
                type="submit"
                onClick={login}
                className="mt-4 w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
               Get Started</button>
     }
          </div>
      </div>
    </div>
   </div>
  );
}

export default LandingPage;