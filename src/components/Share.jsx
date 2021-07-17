import React from 'react'
import {useAuth} from "../Context/AuthContext";
import {useState,useRef} from "react";
import { PermMedia,Cancel,Label, EmojiEmotions,Room } from '@material-ui/icons';
import "./share.css"
import axios from 'axios';
function Share() {
    const {user}=useAuth();
    const [file,setFile]=useState(null);
    const desc=useRef();
    const submitHandler=async(e)=>{
        e.preventDefault();
        const newPost={
            userId:user._id,
            desc:desc.current.value,
        };
        if(file){
            const data=new FormData();
            const fileName=Date.now()+file.name;
            data.append("name",fileName);
            data.append("file",file);
            newPost.image=fileName;
            console.log(newPost);
            try{
                await axios.post('https://SocialMedia.snehaadlakha.repl.co/upload',data);
            }
            catch(err){

            }
        }
        try{
            await axios.post('https://SocialMedia.snehaadlakha.repl.co/posts',newPost)
            window.location.reload();
        }
        catch(err){

        }
    };
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                <img src={user.profilePicture?user.profilePicture:"/assets/decent.jpg"} alt="" className="shareprofileimg" />
                <input placeholder={"Type Something to Share "+user.username} className="shareInput" ref={desc}></input>
                </div>
                <hr className="sharehr"/>
                {file&& (
                    <div className="shareimgContainer">
                        <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
                        <Cancel className="shareCancelImg" onClick={()=>setFile(null)}></Cancel>
                        </div>
                )}
                <form onSubmit={submitHandler} className="shareBottom">
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia className="shareIcon"/>
                            <span className="shareOptionText">Image</span>
                            <input 
                            type="file" 
                            id="file"
                            accept=".png,.jpeg,.jpg"
                            style={{display:"none"}}
                            onChange={(e)=>setFile(e.target.files[0])}/>
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton" type="sumbit">Share</button>
                </form>
            </div>
        </div>

    )
}

export default Share
