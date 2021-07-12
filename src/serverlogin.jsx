import axios from "axios";
export const serverLogin=async(userCredential,dispatch)=>{
    dispatch({type:"LOGIN_INITATE"});
    try{
        console.log("before");
        const response=await axios.post("https://SocialMedia.snehaadlakha.repl.co/auth/login",userCredential)
        console.log(response);
        dispatch({type:"LOGIN_SUCCESS",payload:response.data});

    }catch(err){
        dispatch({type:"LOGIN_FAIL",payload:err});
    }
};