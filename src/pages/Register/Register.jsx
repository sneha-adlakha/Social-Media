import { useAuth} from "../../Context/AuthContext";
import {useRef} from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router";

export const Register = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const repeatPassword = useRef();

    const { user } = useAuth();
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
                    <form className="loginsection">
                        <input className="inputlogin" placeholder="Enter UserName" required ref={username} />
                        <input className="inputlogin" placeholder="Email" required ref={email} type="email" />
                        <input className="inputlogin" placeholder="Password" required ref={password} type="password" minLength="6" />
                        <input className="inputlogin" placeholder="Repeat Password" required ref={repeatPassword} type="password" />
                        <button>SignUp</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


