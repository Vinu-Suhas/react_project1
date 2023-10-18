import React, { useContext } from "react";
import { bucket } from "../Store/CreateStore";
export function  Food(){
    const data=useContext(bucket)

    return(<>
        <h1>This is Technology Components</h1>
        {data.data.filter(element=>element.category==='food').map((element,index)=>{
            return(<>
                <div key={index}>
                    
                <h1>{element.title}</h1>
                <img src={element.img} width={"400px"} style={{borderRadius:"18px"}}/>
                </div>
            </>)
        })}
        </>)
}