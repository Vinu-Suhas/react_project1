import React from "react";
import './home.css'
import {Bollywood} from './Components/Bollywood'
import {Hollywood} from './Components/Hollywood'
import {Fitness} from './Components/Fitness'
import {Technology} from './Components/Technology'
import {Food} from './Components/Food'
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'
import {CreateStore} from './Store/CreateStore'
import { Homes } from "./Components/Home";
import { ArticleInfo } from "./Components/ArticleInfo";
import Footer from "./Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB, faBars } from "@fortawesome/free-solid-svg-icons";
export function Home() {
  return (
    <div style={{width:"100%",}}>
      <div>
        <h1 className="center">
          <div style={{transform: "matrix(0, -1, 1, 0, 0, 0)",}}><span >The </span></div> <span>Siren</span>
        </h1>
      </div>
      <div className="subheading_container">
      <CreateStore>
        <BrowserRouter>
        <ul className="heading_container" >
           <Link to="/"> <li className="underline">Home</li></Link>
           <Link to="/bollywood"> <li className="underline">Bollywood</li></Link>
           <Link to="/hollywood"><li className="underline">Hollywood</li></Link>
           <Link to="/technology"><li className="underline">Technology</li></Link>
           <Link to="/food"><li className="underline">Food</li></Link>
           <Link to="/fitness"><li className="underline">Fitness</li></Link>
           <li className="dropDownMenu"><FontAwesomeIcon icon={faBars}  size="2xl" /></li>
        </ul>
        <hr/>
        <Routes >
            <Route path="/bollywood" element={<Bollywood/>}/>
            <Route path="/hollywood" element={<Hollywood/>}/>
            <Route path="/fitness" element={<Fitness/>}/>
            <Route path="/technology" element={<Technology/>}/>
            <Route path="/food" element={<Food/>}/>
            <Route path="/article/:id" element={<ArticleInfo/>}/>
            <Route path="/" element={<Homes/>}/>
        </Routes>
        </BrowserRouter>
        </CreateStore>
        <Footer/>
        </div>
    </div>
  );
}
