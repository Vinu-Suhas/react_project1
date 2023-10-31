import React, { useContext } from "react";
import userProfile from "../assests/User_Profile.png"
export function AuthorInfo(){
    return(<>
    <div className="authorInfo">
        <img src={userProfile} />
        <div className="authorTextContent">
            <span style={{fontWeight:"bold"}}>Swceag Hokie</span>

            <p style={{color:"#A2A2A2"}}> Jan 28, 2023 · 10 min read</p>
        </div>
    </div>
    </>)
}
