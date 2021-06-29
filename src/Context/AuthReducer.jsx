export const AuthReducer=(state,action)=>{
    switch(action.type){
        case "INITIAL_LOGIN":{
            return {
                user:null,
                isLoading:false,
                isError:false
            }
        }
        default:{
            return state;
        }

    }

}