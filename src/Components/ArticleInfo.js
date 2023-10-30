import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { bucket } from "../Store/CreateStore";
import userProfile from "../assests/User_Profile.png"

export function ArticleInfo(){
    const data=useContext(bucket)
    const articleId=useParams().id
    console.log(data.data[articleId]);
    return(<>
    <h1>{data.data[articleId].title}</h1>
    <div className="authorInfo">
        <img src={userProfile} />
        <div className="authorTextContent">
            <span style={{fontWeight:"bold"}}>Swceag Hokie</span>

            <p style={{color:"#A2A2A2"}}> Jan 28, 2023 · 10 min read</p>
        </div>
{/* <FontAwesomeIcon icon="fa-solid fa-dice-one" /> */}
    </div>
    <div className="imgContainer" >
    <img src={data.data[articleId].img} width="500px" style={{border:"solid black 4px",alignSelf:"center"}}/>
    
    </div>
        

    </>)
}