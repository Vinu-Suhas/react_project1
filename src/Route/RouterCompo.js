import React from "react";
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import {Contact} from './Student'
// import 
export function RouterCompo(){
    return(<>
    <BrowserRouter>
        <Routes>
            <Route path='/'></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/student' element={<Student/>}></Route>

        </Routes>
    
    
    
    </BrowserRouter>
    </>)
}