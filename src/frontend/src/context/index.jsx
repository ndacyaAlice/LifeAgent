import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate();
    var [hasProfile, setHasProfile] = useState(null);
    const [name, setName ] = useState(" ")

    useEffect(() => {
        const checkAuth = async () => {
            var authenticated = window.auth.isAuthenticated;
            if (authenticated) {
                navigate('/');
                return;
            }else{
                const profile= await getProfile();
                if(profile.Err?.NotFound){
                    setHasProfile(false)
                }else if(profile.Ok){
                    const { Fullname} =profile.Ok
                      setName(Fullname)
                      setHasProfile(true)
                }
            }
            
        };
        

        checkAuth();
    }, [navigate]);

    if (hasProfile === null) {
        return  <div style={{textAlign: "center"}}>
        <CircularProgress size={50} color="primary" />
    </div>
    }

    return (
        <AuthContext.Provider value={{ hasProfile, name, Role }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;