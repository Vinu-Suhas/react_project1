import React, { useContext } from "react";
import { bucket } from "../Store/CreateStore";
import { Link } from "react-router-dom";

export function  Technology(){
    const data=useContext(bucket)

    
    return(<>
     <div className="contentContainer" >
    <div className="leftContainer">
    <h1  style={{textAlign:"left",textDecoration: "underline",textDecorationColor:"red"}}>Technology</h1>
    {/* <hr style={{ border:"5px solid green",marginLeft:"-5px",width:"8vw",marginTop:"-15px"}}/> */}
    {data.data.filter(element=>element.category==='technology').map((element,index)=>{
        return(
            <div key={element.id} className="contentBox">
                
            <img src={element.img} width={"300px"} style={{borderRadius:"18px"}} alt="img not found"/>
            <div key={index} className="textContent">
            <Link to={`/article/${element.id}`}><h1 className="contentTitle">{element.title}</h1></Link>
            <p>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-</p>
            </div>

            {/* <hr style={{ color:"#333",border:"3px solid grey",width:"90%"}}/> */}
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
                
                    <img src={element.img} width={"300px"} style={{borderRadius:"18px"}} alt="img not found"/>
                    <div key={index} className="textContent">
                    <Link to={`/article/${element.id}`}><h2 className="contentTitle">{element.title.slice(0,81)}</h2></Link>
                    {/* <p>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-</p> */}
                    </div>
        
                    {/* <hr style={{ color:"#333",border:"3px solid grey",width:"90%"}}/> */}
                    </div>)
            })}
            {/* <img src="https://shorturl.at/achz4"  style={{width:"400px",display:"block",borderRadius:"16px"}} />
            <h2 style={{width:"400px"}}>Catch hot Ballons with adventures trekking</h2> */}
            <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/c0a3fdfc-8a4f-4b20-92ef-896499c05843.gif" height="419px" width="600px"/>
            </div>

            </div>
           
          
    </>)
}