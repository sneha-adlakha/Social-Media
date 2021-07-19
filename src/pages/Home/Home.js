import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";
import "./home.css";
function Home() {
    return (
        <div>
            <Navbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
        </div>
    )
}

export default Home
