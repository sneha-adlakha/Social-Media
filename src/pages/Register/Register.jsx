import {useRef} from "react";
import "./register.css";
import axios from "axios";
import { NavLink,useNavigate } from "react-router-dom";


export const Register = () => 
{
    const name=useRef();
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
                name:username.current.value,
                username:username.current.value,
                email:email.current.value,
                password:password.current.value,
            };
            try
            {
                await axios.post("https://SocialMedia.snehaadlakha.repl.co/auth/register",user);
                navigate('/home');
            }catch(err){
                console.log(err);
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
                    <input className="inputlogin" placeholder="Name" required ref={name} />
                    <input className="inputlogin" placeholder="Enter UserName" required ref={username} />
                    <input className="inputlogin" placeholder="Email" required ref={email} type="email" />
                    <input className="inputlogin" placeholder="Password" required ref={password} type="password" minLength="6" />
                    <input className="inputlogin" placeholder="Repeat Password" required ref={repeatPassword} type="password" />
                    <button className="registerbtn" type="submit">SignUp</button>
                    <NavLink to="/login"><button className="loginbtn">Login</button></NavLink>
                    
                    </form> 
                </div>
            </div>
        </div>
    );
}


