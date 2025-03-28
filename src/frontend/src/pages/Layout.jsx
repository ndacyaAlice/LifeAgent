import React from "react";
import { Outlet } from "react-router"
import { Navbar, Sidebar } from "../components";


const Layout=()=>{
    return (
    <div className="sm:-8 relative flex min-h-screen flex-row bg-[#13131a] p-4">
        <div className="relative mr-10 hidden sm:flex">
          <Sidebar />
         </div>
  
         <div className="mx-auto max-w-[1280px] flex-1 max-sm:w-full sm:pr-5">
           <Navbar />
           <Outlet/>
       </div>
    </div>
  
    )
}

export default Layout;