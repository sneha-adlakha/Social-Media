import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import "./home.css";
function Home() {
    return (
        <div>
            <Navbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
            </div>
        </div>
    )
}

export default Home
