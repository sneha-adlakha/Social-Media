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
                        <input value="email"/>
                        <input value="password"/>
                        <input value="login"/>
                        <input value="signup"/>
                    </form>                  
                   </div>
                </div>
            </div>
    );
}


