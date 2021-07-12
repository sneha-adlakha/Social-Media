export const AuthReducer=(state,action)=>{
    switch(action.type){
        case "INITIAL_LOGIN":
            return {
                user:null,
                isLoading:false,
                isError:false
            };
        case "LOGIN_SUCCESS":
            return {
                user:action.payload,
                isLoading:false,
                isError:false
            };
            case "LOGIN_FAIL":
                return {
                    user:null,
                    isLoading:false,
                    isError:true
                }
        
        default:{
            return state;
        }

    }

}