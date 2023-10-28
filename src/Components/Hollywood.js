import React, { useContext } from "react";
import { bucket } from "../Store/CreateStore";
export function  Hollywood(){
    const data=useContext(bucket)

    return(<>
    <div className="contentContainer">
                <div className="leftContainer">
            
        <h2>Hollywood</h2>
        {data.data.filter(element=>element.category==='hollywood').map((element,index)=>{
            return(<>
                <div key={index}>
                    
                <h1>{element.title}</h1>
                <img src={element.img} width={"400px"} style={{borderRadius:"18px"}}/>
                </div>
            </>)
        })}
        </div>
                <div className="rightContainer">
            <h1>Top posts</h1>
            </div>
        </div>
        </>)
}