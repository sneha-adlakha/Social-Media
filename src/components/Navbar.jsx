import "./navbar.css"
import { Search, Person, Notifications } from "@material-ui/icons";
import {useAuth} from "../Context/AuthContext";


function Navbar() {
    const {dispatch}=useAuth();
    return (
        <div className="navbarContainer">
            <div className="leftnav">
                <span className="logo">MakebooK</span>
            </div>
            <div className="centernav">
                <div className="searchbar">
                    <Search className="searchicon" />
                    <input placeholder="Search friends" className="searchInput" />
                </div>
            </div>
            <div className="rightnav">
                <div className="rightlinks">
                    <span className="rightlink">Home</span>
                    <span className="rightlink">TimeLine</span>
                </div>
                <div className="righticons">
                    <div className="righticonitem">
                        <Person />
                        <span className="righticonBadge">1</span>
                    </div>
                    <div className="righticonitem">
                        <Notifications />
                        <span className="righticonBadge">1</span>
                    </div>

                </div>
                <img src={"/assets/decent.jpg"} alt="profile" className="profilepic" />
                <button onClick={()=> dispatch({type:"INITIAL_LOGIN"})}>Logout</button>
            </div>
        </div>
    )
}


export default Navbar
