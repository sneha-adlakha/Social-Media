import React from 'react';
import "./rightbar.css";
import {useAuth} from "../Context/AuthContext";
import Online from "./Online";
import {useEffect,useState} from "react";
import axios from 'axios';



const HomeRightBar=()=>{
    const [allUsers,setAllUsers] =useState([])
    useEffect(() => {
        const fetchUsers=async()=>{
            const response=
            await axios.get("https://SocialMedia.snehaadlakha.repl.co/users");
            setAllUsers(response.data.users);
        };
        fetchUsers();
    }, []);
    return(
        <>
        <div className="birthdayContainer">
            <img src={"/assets/decent.jpg"} alt="" className="birthdayImg" />
            <span className="birthdayText">
                <b>Megha</b> and <b>2 Others</b> have Birthdays Today.
            </span>
            </div>
            <img src={"/assets/uncle.jpg"} alt="" className="rightAdImg" />
            <h5 className="rightbarTitle">Online Friends</h5>
            <ul className="rightbarFriendList">
                {allUsers.map((u)=>(
                    <Online key={u.id} user={u}/>

                ))}
            </ul>
            </>
        
    )
}


function Rightbar() {
    const {user} =useAuth();


    return (
        <div className="rightbar">
            <div className="rightWrapper"></div>
            {user && <HomeRightBar/>}

        </div>




    )
}

export default Rightbar
