import React, { useContext } from "react";
import { bucket } from "../Store/CreateStore";
export function  Hollywood(){
    const data=useContext(bucket)

    return(<>
        {data.data.filter(element=>element.category==='hollywood').map((element,index)=>{
            return(<>
                <div key={index}>
                    
                <h1>{element.title}</h1>
                <img src={element.img} width={"400px"} style={{borderRadius:"18px"}}/>
                </div>
            </>)
        })}
        </>)
}