import React from 'react';
import "./rightbar.css";
import {useAuth} from "../Context/AuthContext";
import Online from "./Online";
import {useEffect,useState} from "react";
import axios from 'axios';
import { Navigate } from "react-router-dom";

function Rightbar({user}) {
    const {user:currentUser,dispatch} =useAuth();
    const [friends,setFriends]=useState([]);
    const [followed,setFollowed]=useState(currentUser.followings.includes(user?.id));

    useEffect(() => {
        const fetchFriends=async()=>{
            try{
                const friendList=await axios.get("https://SocialMedia.snehaadlakha.repl.co/users/friends/"+user._id);
                console.log("freindList",friendList.data);
                setFriends(friendList.data);
            }
            catch(err){
                console.log(err);
            }
        };
        fetchFriends();
    }, [user])

    
const HomeRightBar=()=>{
    const [allUsers,setAllUsers] =useState([])
    useEffect(() => {
        const fetchUsers=async()=>{
            const response=
            await axios.get("https://SocialMedia.snehaadlakha.repl.co/users/all");
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
};

    const handleClick=async()=>{
        try{
            if(followed){
                await axios.put(`https://socialmedia.snehaadlakha.repl.co/users/${user._id}/unfollow`,
                {
                    userId:currentUser._id
                });
            dispatch({type:"UNFOLLOW",payload:user._id,});
            }
            else{
                await axios.put(`https://socialmedia.snehaadlakha.repl.co/users/${user._id}/follow`,
                {
                    userId:currentUser._id,
                });
                dispatch({type:"FOLLOW",payload:user._id});
            }
            setFollowed(!followed);
        }catch(err){
        }
    };
    const ProfileRightBar=()=>{
        return(
            <>
            {user.username !== currentUser.username &&
            (
                <button className="rightFollowBtn" onClick={handleClick}>{followed?"UnFollow":"Follow"}</button>
            )}
            <h4 className="rightBarTitle">User Information</h4>
            <div className="rightBarInfo">
                <div className="rightBarInfoItem">
                    <span className="rightBarInfoKey">City:</span>
                    <span className="rightBarInfoValue">{user.city}</span>
                </div>
                    <div className="rightBarInfoItem">
                    <span className="rightBarInfoKey">From:</span>
                    <span className="rightBarInfoValue">{user.from}</span>
                </div>
                <div className="rightBarInfoItem">
                    <span className="rightBarInfoKey">Relationship:</span>
                    <span className="rightBarInfoValue">{user.relationship===1?"Single":user.relationship===1?"Married":"-"}</span>
                </div>
            </div>
            <h4 className="rightBarTitle">User Friends</h4>
            <div className="rightBarFollowings">{friends.map((friend)=>(
            <div className="rightBarFollwing">
            <img src={"/assets/decent.jpg"} alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">{friend.username}</span>
            </div>
             ))}
            </div>
            </>
        );
    };
    return (
        <div className="rightbar">
            <div className="rightWrapper"></div>
            {user?<ProfileRightBar/>: <HomeRightBar/>}

        </div>




    )
}

export default Rightbar
