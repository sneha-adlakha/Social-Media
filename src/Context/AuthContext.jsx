import {createContext,useContext,useReducer,useEffect} from "react";
import {AuthReducer} from "./AuthReducer";

const initialState={user:JSON.parse(localStorage.getItem("user")||null),isLoading:false,isError:false}

export const AuthContext=createContext(initialState);

export const AuthProvider=({children})=>
{
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(state.user))
    }, [state.user])
    return(
        <AuthContext.Provider 
        value={{
            user:state.user,
            isLoading:state.isLoading,
            isError:state.isError,
            dispatch
        }}
        >
            {children}S
        </AuthContext.Provider>
    )
}

export const useAuth=()=>{
    return useContext(AuthContext);
}

