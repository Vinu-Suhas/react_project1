import React, { useContext } from "react";
import { bucket } from "../Store/CreateStore";
export function  Technology(){
    const data=useContext(bucket)

    // console.log(data.data)
    return(<>
    <h1>This is Technology Components</h1>
    {data.data.filter(element=>element.category==='technology').map((element,index)=>{
        return(<>
            <div key={index}>
                
            <h1>{element.title}</h1>
            <img src={element.img} width={"400px"} style={{borderRadius:"18px"}}/>
            </div>
        </>)
    })}
    </>)
}