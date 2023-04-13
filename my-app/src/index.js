import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './Home';
import Services from './Services';
import Comment from './Lookit';
import About from './About';
import Logout from './Logout';
// import Html from './Html';
import './index.css';
// import './looki'
import Lookit from './Lookit';
import Htmlhome from './Htmlhome';
import Codedefinition from './Codedefinition';
import Htmlheading from './Htmlheading';
import Attribute from './Attribute';
import Htmlformating from './Htmlformating';
import Singup from './Singup';
import Singin from './Singin';
import Users from './UserId/Users';
// import forUserIdSeen from './Home'
// import { userData } from './Home';
// import { useContext } from 'react';

import {BrowserRouter, Routes, Route} from "react-router-dom";







const root = ReactDOM.createRoot(document.getElementById('root'));




root.render (

  <>
  
 <BrowserRouter>
 <Routes>
 
 <Route  path='/' element={<App/>}>
 <Route index element={<Home/>} />


 <Route path='services' element={<Services/>} />
 <Route path='lookit' element={<Lookit/>} />
 <Route path='about' element={<About/>} />
 <Route path='Logout' element={<Logout/>} />
 <Route path='htmlhome' element={<Htmlhome/>} />
 <Route path='definition' element={<Codedefinition/>} />
 <Route path='htmlheading' element={<Htmlheading/>} />
 <Route path='htmlAttribute' element={<Attribute/>} />
 <Route path='photos' element={<Attribute/>} />
 <Route path="/user/:id" element={<Users />} />
 <Route path='htmlformating' element={<Htmlformating
  
  />} 

  

  />

 

 
 
 
 </Route>
 <Route path='Singup' element={<Singup/>} />
 <Route path='Singin' element={<Singin/>} />
 <Route path='S' element={<forUserIdSeen/>} /> 
 </Routes>
 
 
 </BrowserRouter>

  
    </>
)
