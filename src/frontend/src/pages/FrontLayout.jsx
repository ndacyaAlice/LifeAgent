import React from 'react';
import { Outlet } from 'react-router';


const FrontLayout = () => {
  return (
    <div>
       {Outlet}
    </div>
  );
}

export default FrontLayout;