import React from 'react';
import { Outlet } from 'react-router';


const FrontLayout = () => {
  return (
    <div className="w-full bg-[#13131a] h-full">
       <Outlet/>
    </div>
  );
}

export default FrontLayout;