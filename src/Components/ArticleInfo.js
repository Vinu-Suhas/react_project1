import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { bucket } from "../Store/CreateStore";
import userProfile from "../assests/User_Profile.png"
import { AuthorInfo } from "./AuhtorIntro";

export function ArticleInfo(){
    const data=useContext(bucket)
    const articleId=useParams().id
   const articleData=data.data.find(element=>element.id==articleId)
    return(<>
    <h1>{articleData.title}</h1>

        <AuthorInfo/>
{/* <FontAwesomeIcon icon="fa-solid fa-dice-one" /> */}
    <div className="imgContainer" >
    <img src={articleData.img} width="500px" style={{border:"solid black 4px",alignSelf:"center"}}/>
    </div>
        

    </>)
}