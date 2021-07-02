import {useRef} from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const repeatPassword = useRef();
    const navigate=useNavigate();

    const submitHandler=async(e)=>{
        e.preventDefault();
        if(repeatPassword.current.value!=password.current.value){
            repeatPassword.current.setCustomValidity("Password Mismatched")
        }
        else{
            const user={
                username:username.current.value,
                password:password.current.value,
                repeatPassword:repeatPassword.current.value,
            };
            try{
                await axios.post("https://SocialMedia.snehaadlakha.repl.co/auth/user",user);
                navigate('/login')
            }catch(err){
                console.log("error");
            }
        }
    };
    return (
        <div className="login">
            <div className="loginwrapper">
                <div className="leftlogin">
                    <div className="loginLogo">
                        MakeBook
                    </div>
                    <div className="logindesc">
                        Make Friends with MakeBook.
                    </div>
                </div>
                <div className="rightlogin">
                    <form className="loginsection" onSubmit={submitHandler}>
                        <input className="inputlogin" placeholder="Enter UserName" required ref={username} />
                        <input className="inputlogin" placeholder="Email" required ref={email} type="email" />
                        <input className="inputlogin" placeholder="Password" required ref={password} type="password" minLength="6" />
                        <input className="inputlogin" placeholder="Repeat Password" required ref={repeatPassword} type="password" />
                        <button className="registerbtn" type="submit">SignUp</button>
                        <button className="registerbtn">Login</button>
                    </form> 
                </div>
            </div>
        </div>
    );
}


