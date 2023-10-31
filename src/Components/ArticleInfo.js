import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { bucket } from "../Store/CreateStore";
import userProfile from "../assests/User_Profile.png"
import { AuthorInfo } from "./AuhtorIntro";

export function ArticleInfo(){
    const data=useContext(bucket)
    const articleId=useParams().id
    console.log(data.data[articleId]);
    return(<>
    <h1>{data.data[articleId].title}</h1>

        <AuthorInfo/>
{/* <FontAwesomeIcon icon="fa-solid fa-dice-one" /> */}
    <div className="imgContainer" >
    <img src={data.data[articleId].img} width="500px" style={{border:"solid black 4px",alignSelf:"center"}}/>
    </div>
        

    </>)
}