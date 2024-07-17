import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { fireContext } from "./AuthContext";




const PrivateRoute = ({children}) => {

    const {user} = useContext(fireContext)

    if(user){ 
     
        return children
 
    }


    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;