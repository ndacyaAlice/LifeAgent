import React, { useContext, useEffect } from "react";
import { DisplayInfo } from "../components";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context";
import { Onboarding } from "./Onboarding";

const Home = () => {
  const { hasProfile } = useContext(AuthContext); // ✅ Get context at the top level
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasProfile) {
      navigate('/onboarding');
    }
  }, [hasProfile, navigate]);  
  return <DisplayInfo />;
};

export default Home;
