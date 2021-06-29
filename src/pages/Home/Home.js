import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import "./home.css";
function Home() {
    return (
        <div>
            <Navbar/>
            <div className="homeContainer">
                <Sidebar/>
            </div>
        </div>
    )
}

export default Home
