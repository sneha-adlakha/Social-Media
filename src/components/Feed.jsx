import React from 'react'
import {useAuth} from "../Context/AuthContext";
import {useState,useEffect} from "react";
import axios from 'axios';

function Feed({username}) 
{
    const {user}=useAuth();
    const [posts,setPosts]=useState([]);
    useEffect(() => {
        const fetchPosts=async()=>{
            const response=username?
            await axios.get("https://SocialMedia.snehaadlakha.repl.co/posts/profile"+username):
            await axios.get("https://SocialMedia.snehaadlakha.repl.co/posts/timeline"+user.user._id);
            setPosts(response.data.sort((p1,p2)=>{
                return new Date(p2.createdAt)-new Date(p1.createdAt);
            })
            );
        };
        fetchPosts();
    }, [username,user._id]);
    return (
        <div className="feed">
            <div className="feedWrapper">
                {!username||username===user.username}
                {posts.map((p)=>(
                    <div>
                    <h1>{p._id}</h1>
                    <h2>{p}</h2>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Feed

