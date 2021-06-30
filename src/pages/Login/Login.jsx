import { useAuth, useRef } from "../../Context/AuthContext";
import "./login.css"
export const Login = () => {
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
                        <input>Email</input>
                        <input>Password</input>
                        <button>Login</button>
                        <button>Signup</button>
                    </form>                  
                   </div>
                </div>
            </div>
    );
}


