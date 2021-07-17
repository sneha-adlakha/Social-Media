import React from 'react'
import {useAuth} from "../Context/AuthContext";
import {useState,useEffect} from "react";
import "./feed.css"
import axios from 'axios';
import Post from "./Post";
import Share from "./Share";

function Feed({username}) 
{
    const {user}=useAuth();
    const [posts,setPosts]=useState([]);
    
    useEffect(() => {
        const fetchPosts=async()=>{
            const response=username?
            await axios.get("https://SocialMedia.snehaadlakha.repl.co/posts/profile/"+username):
            await axios.get("https://SocialMedia.snehaadlakha.repl.co/posts/timeline/"+user._id);
            
            setPosts(response.data.sort((p1,p2)=>{
                return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
            );
        };
        fetchPosts();
    }, [username,user._id]);
    return (
        
        <div className="feed">
            <div className="feedWrapper">
            
                {(!username||username===user.username)&&<Share/>}
                {posts.map((p)=>(
                    <Post key={p._id} post={p}/>
        
                ))}

            </div>
        </div>
    )
}

export default Feed

