import "./navbar.css"
import {Search,Person,Notifications} from "@material-ui/icons"

function Navbar() {
    return (
        <div className="navbarContainer">
            <div className="leftnav">
                <span className="logo">Makebook</span>
            </div>
            <div className="centernav">
                <div className="searchbar">
                    <Search/>
                    <input placeholder="Search friends" className="searchInput" />
                </div>
            </div>
            <div className="rightnav">
                <div className="rightlinks">
                    <span className="rightlink">Homepage</span>
                    <span className="rightlink">Timeline</span>
                </div>
                <div className="righticons">
                    <div className="righticonitem">
                        <Person/>
                        <span className="righticonBadge">1</span>
                    </div>
                    <div className="righticonitem">
                        <Notifications/>
                        <span className="righticonBadge">1</span>
                    </div>
                    
                </div>
                <img src="./assets/uncle.jpeg" alt="" className="profilepic"/>
            </div>
        </div>
    )
}


export default Navbar
