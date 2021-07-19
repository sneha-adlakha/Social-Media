import React from 'react';
import "./online.css"

function Online({user}) {
    return (
        <li className="rightbarFriend">
            <div className="rightProfileImgContainer">
            <img src={"/assets/decent.jpg"} alt="profile" className="rightbarProfileImg" />
            <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">{user.username.toUpperCase()}</span>
        </li>

    )
}

export default Online
