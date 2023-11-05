import React,{useContext} from "react";
import { Link } from "react-router-dom"
import './Home.css'
import { bucket } from "../Store/CreateStore";
export function  Homes(){
    const data=useContext(bucket)
    const displayArticles=data.data
   return(<div className="homeContainer">

    <div className="grid_container">

        <div className="container1">

        {/* <img src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80" width ="200px"  height="200px"   alt="Snow" /> */}
        </div>
        <div className="container2">

            {/* <img src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80" width ="200px"  height="200px"   alt="Snow" /> */}
        </div>
        <div className="container3">

            {/* <img src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80" width ="200px"  height="200px"   alt="Snow" /> */}
        </div>
 </div>
    <h1 style={{textAlign:"left",textDecoration: "underline",textDecorationColor:"red"}}>The Latest</h1>
    <div className="recommendedContent">
        {displayArticles.slice(0,3).map((element,index)=>{
                return(<div  key={index} className="recommendedContentElement" >
                    <Link  to={`/article/${element.id}`}>
                        <img src={element.img}/>
                        <h3 >{element.title}</h3> 
                    </Link>
                </div>) 
        } )}
    </div>
    <div className="contentContainer" >
       <div className="leftContainer">
       <h1  style={{textAlign:"left",textDecoration: "underline",textDecorationColor:"red"}}>Latest Articles</h1>
       {/* <hr style={{ border:"5px solid green",marginLeft:"-5px",width:"8vw",marginTop:"-15px"}}/> */}
       {data.data.filter(element=>element.category==='hollywood' | element.category==='sports').slice(0,4).map((element,index)=>{
           return(
               <div key={element.id} className="latestArticles" >
                   
               <img src={element.img}  alt="img not found"/>
               <div key={index} className="textContent">
               <Link to={`/article/${element.id}`}><h2 className="contentTitle">{element.title}</h2></Link>
               <p>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-</p>
               </div>
   
               </div>
           )
           
       })}
       </div>
       
               <div className="rightContainer">
               <h1 style={{textAlign:"left",textDecoration: "underline",textDecorationColor:"red"}}>Top posts</h1>
               {/* <hr style={{ border:"4px solid green",width:"5vw",alignContent:"left"}}/> */}
               {data.data.filter(element=>element.category==='technology').slice(0,2).map((element,index)=>{
                   return(            
                       <div key={element.id} className="contentBox">
                   
                       <img src={element.img}  alt="img not found"/>
                       <div key={index} className="textContent">
                       <Link to={`/article/${element.id}`}><h2 className="contentTitle">{element.title.slice(0,81)}</h2></Link>
                       {/* <p>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-</p> */}
                       </div>
           
                       {/* <hr style={{ color:"#333",border:"3px solid grey",width:"90%"}}/> */}
                       </div>)
               })}
               {/* <img src="https://shorturl.at/achz4"  style={{width:"400px",display:"block",borderRadius:"16px"}} />
               <h2 style={{width:"400px"}}>Catch hot Ballons with adventures trekking</h2> */}
               <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/c0a3fdfc-8a4f-4b20-92ef-896499c05843.gif" className="ad"/>
               </div>
   
               </div>
    <h1 style={{textAlign:"left",textDecoration: "underline",textDecorationColor:"red"}}>The Latest</h1>
    <div className="recommendedContent">
        {displayArticles.filter(element=>element.category==='hollywood').slice(0,3).map((element,index)=>{
                return(<div  key={index} className="recommendedContentElement" >
                    <Link  to={`/article/${element.id}`}>
                        <img src={element.img} />
                        <h3 >{element.title.slice(0,65)}</h3> 
                    </Link>
                </div>) 
        } )}
    </div>
    </div>)
}