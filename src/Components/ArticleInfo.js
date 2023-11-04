import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { bucket } from "../Store/CreateStore";
import userProfile from "../assests/User_Profile.png"
import { AuthorInfo } from "./AuhtorIntro";
import './articleinfo.css'
export function ArticleInfo(){
    const data=useContext(bucket)
    const articleId=useParams().id
    const articleData=data.data.find(element=>element.id==articleId)
    const recommendedContent=data.data.filter(element=>element.category===articleData.category && (element.id!=articleId))
    const Navi=useNavigate()
    console.log(recommendedContent)
    return(<>
    <h1>{articleData.title}</h1>

        <AuthorInfo/>
{/* <FontAwesomeIcon icon="fa-solid fa-dice-one" /> */}
    <div className="imgContainer" >
    <img src={articleData.img}  />

    </div>
    <p className="articleDescription" >
    React works by breaking down complex UIs into small, reusable components. A component is a self-contained piece of code that renders a specific part of the UI. Components can be nested within other components to create complex UIs.

    When you define a component in React, you describe what you want to render on the screen. React then takes care of updating the DOM efficiently to match the desired state of the UI.
    React is a powerful and flexible JavaScript library for building user interfaces. It is fast, scalable, and easy to learn and use. React is used by many popular websites and web applications, and it is a great choice for front-end developmen

    </p>
    <button  onClick={()=>Navi(`/${articleData.category}`)}><h1>Go back</h1></button>
    <h2>Related Stories</h2>
    <div className="recommendedContent">
        {recommendedContent.map((element,index)=>{
            return(
                <Link  to={`/article/${element.id}`}>
            <div  key={index} className="recommendedContentElement" >
                    <img src={element.img}/>
                    <h3 >{element.title}</h3> 
            </div>
                </Link>)
        })}
    </div>
        

    </>)
}