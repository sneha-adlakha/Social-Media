import {Navigate,Route} from "react-router";
import { useAuth } from "../Context/AuthContext";

export const PrivateRoute=({path,...props})=>{
    const {user}=useAuth();
    return user?(
        <Route {...props} path={path}/>
    ):(
        <Navigate replace state={{from:path}} to={"/login"}/>
    );
};