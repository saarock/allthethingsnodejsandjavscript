import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Htmlall from './Htmlall';

import { BsFillCaretRightSquareFill } from "react-icons/bs";

export default function Html() {


 
 let nav ={
  display: "block"
 }
  return (
    <>
    <div className='HTML' style={nav}>
   
    <div className='htmltut'>
    <NavLink to='/htmlhome' className= "htmlc">HTML INTRO</NavLink>
    <NavLink to='/definition' className= "htmlc">CODE DEFINATION</NavLink>

    <NavLink to='/htmlheading' className= "htmlc">HTML HEADING AND par</NavLink>
    <NavLink to='/htmlAttribute' className= "htmlc">HTML ATTRIBUTES</NavLink>
    <NavLink to='/htmlformating' className= "htmlc">HTML FORMATING</NavLink>
    <NavLink to='/htmled' className= "htmlc">HTML EDITORS</NavLink>
    <NavLink to='/htmled' className= "htmlc">HTML EDITORS</NavLink>
    <NavLink to='/htmled' className= "htmlc">HTML EDITORS</NavLink>
    <NavLink to='/htmled' className= "htmlc">HTML EDITORS</NavLink>
    <NavLink to='/htmled' className= "htmlc">HTML EDITORS</NavLink>
    <NavLink to='/htmled' className= "htmlc">HTML EDITORS</NavLink>
    <NavLink to='/htmled' className= "htmlc">HTML EDITORS</NavLink>
    <NavLink to='/htmled' className= "htmlc">HTML EDITORS</NavLink>
    <NavLink to='/htmled' className= "htmlc">HTML EDITORS</NavLink>
    <NavLink to='/htmled' className= "htmlc">HTML EDITORS</NavLink>
    <NavLink to='/htmled' className= "htmlc">HTML EDITORS</NavLink>
    <NavLink to='/htmled' className= "htmlc">HTML EDITORS</NavLink>
    <NavLink to='/htmled' className= "htmlc">HTML EDITORS</NavLink>
    <NavLink to='/htmled' className= "htmlc">HTML EDITORS</NavLink>
    <NavLink to='/htmled' className= "htmlc">HTML EDITORS</NavLink>
    <NavLink to='/htmled' className= "htmlc">HTML EDITORS</NavLink>

    </div>
  
   
  
    </div>
   
    
   
    <Outlet/>

    </>
  )
}

