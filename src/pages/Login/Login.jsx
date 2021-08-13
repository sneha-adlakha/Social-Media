import React from 'react';
import {axios} from "axios";
import {useRef,useState} from "react";
import Loader from "react-loader-spinner";
import {useAuth} from "../../Context/AuthContext";
import { NavLink,useNavigate } from "react-router-dom";
import "./login.css";
import {serverLogin} from "../../serverlogin";
export const Login=()=> {
    const submitHandler=(e)=>{
        e.preventDefault();
        serverLogin({username:username.current.value,password:password.current.value},dispatch);
    };
    const username = useRef();
    const password = useRef();
    const {isLoading,dispatch}=useAuth();
    const navigate=useNavigate();
    return(
       
        <div className="login">
            <div className="loginwrapper">
                <div className="leftlogin">
                    <div className="loginLogo">
                        MakeBook
                    </div>
                    <div className="logindesc">
                       Catchup Friends with MakeBook  
                    </div>
                </div>
                <div className="rightlogin">
                    <form className="loginsection" onSubmit={submitHandler}>
                    <input className="inputlogin" placeholder="Enter UserName" required ref={username} />
                    <input className="inputlogin" placeholder="Password" required ref={password} type="password" minLength="5" />                  
                    <button className="registerbtn" type="submit" disabled={isLoading}>{isLoading? (<Loader type="Oval" color="#f50057" height={50} width={50} />):("Login")}</button>
                    <span className="forgetbtn">Forgot Password?</span>
                    <button className="registerbtn" onClick={()=>navigate("/")}> {isLoading? (<Loader type="Oval" color="#f50057" height={50} width={50} />):("Register Now")}</button>
                    </form> 
                </div>
            </div>
        </div>
    )


}

