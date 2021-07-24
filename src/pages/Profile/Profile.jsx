import "./profile.css"
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";
import axios from "axios";
import {useState,useEffect} from "react";
import {useParams} from "react-router";
export const Profile=()=>
{
    const [user,setUser]=useState({})
    const username=useParams().username;
    useEffect(()=>{
        const fetchUser=async()=>{
            const res= await axios.get(`https://SocialMedia.snehaadlakha.repl.co/users?username=${username}`);
            console.log(res);
            setUser(res.data);
        };
        fetchUser();
    },[username]);
    return(
        <>
        <Navbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                    <img src={"/assets/coverpic2.jpg"} alt="" className="profileCoverImg" />
                    <img src={"/assets/decent.jpg"} alt="profile" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileName">{user.username}</h4>
                        <span className="userDesc">{user.desc}</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed username={username}/>
                    <Rightbar user={user}/>
                </div>
            </div>
        </div>
        </>

    )
}
