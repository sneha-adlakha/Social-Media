import "./post.css"
import { useAuth } from "../Context/AuthContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; 

function Post({ post }) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setisLiked] = useState(false);
    const [user, setUser] = useState({});
    const { user: currentUser } = useAuth();
    useEffect(() => {
        setisLiked(post.likes.includes(currentUser._id));
    }, [post.likes, currentUser._id]);

    useEffect(() => {
        const fetchuser = async () => {
            const response = await axios.get(`https://SocialMedia.snehaadlakha.repl.co/users?userid=${post.userId}`);
            setUser(response.data);
        };
        fetchuser();
    }, [post.userId]);
    const likeHandler=()=>{
        try{
            const res=axios.put(`https://SocialMedia.snehaadlakha.repl.co/posts/`+post._id+"/like",{userId:currentUser._id});
            console.log(res);
        }
        catch(err){
            setLike(isLiked?like-1:like+1);
            setisLiked(!isLiked);
        }
    };

    return (
        
        <div className="post">
            <div className="postwrapper">
                <div className="posttop">
                    <div className="postleft">
                   
                        <img src={user.profilePicture?user.profilePicture:"/assets/decent.jpg"} alt="" className="postprofileimg" />
                        <span className="userName">{user.username}</span>
                        <span className="postedon">{post.createdAt}</span>
                    </div>
                    <div className="posttopright">
                        View More
                    </div>
                </div>
                <div className="postcenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={"/assets/boy.jpg"} alt="" className="postImg" />
                </div>
                <div className="postbottom">
                    <div className="postbottomleft">
                    <h6 onClick={()=>likeHandler()}>Like</h6>
                    <span className="postLikeCounter">{like} People Liked</span>
                    </div>
                    <div className="postbottomright">
                    <span className="postCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post
