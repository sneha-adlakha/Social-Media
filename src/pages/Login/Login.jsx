import React from 'react';
import {useRef} from "react";
import Loader from "react-loader-spinner";
import {useAuth} from "../../Context/AuthContext";
import "./login.css";
export const Login=()=> {
    const email = useRef();
    const password = useRef();
    const {isLoading,dispatch}=useAuth();
    return(
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
                    <input className="inputlogin" placeholder="Email" required ref={email} type="email" />                  
                    <input className="inputlogin" placeholder="Password" required ref={password} type="password" minLength="6" />                  
                    <button className="loginbtn" type="submit" disabled={isLoading}>{isLoading? (<Loader type="Oval" color="#f50057" height={50} width={50} />):("Login")}</button>
                    <span>Forgot Password</span>
                    <button className="registerbtn">{isLoading? (<Loader type="Oval" color="#f50057" height={50} width={50} />):("Register Now")}</button>
                    </form> 
                </div>
            </div>
        </div>
    )


}

