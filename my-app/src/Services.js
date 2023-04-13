import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';

export default function Services() {
  return (
    <>
    <div className=' s'>


    <div className='sample3 s1 ss1' aria-disabled="true">
    <div className='cover'>
    <h1 className='as'>HELLO I'M</h1>
    <h2 className='bs'>HTML</h2>
    <h2 className='bs'><img src='./images/html.png' alt='html' width= "102rem"></img></h2>
    <p className='texts'>Lorem Ipsum is simply dummyLorem Ipsum is simply dummy text of 
     
    </p>

  


    <div className='buttonss'>
    <NavLink to='/htmlhome' className= "buttons">LEARN ME</NavLink>
    
    
    </div>

 


 <div/>
    
    </div>
    <div className='htmle'>
    <img src='./images/htmle.png' alt='htmleg' width="480rem"></img>
    </div>
    </div>




    
    <div className='sample3 s2 ss1  sm' aria-disabled="true">

    <div className='cover'>
    
    <h1 className='as'>HELLO I'M</h1>
    <h2 className='bs'>javaScript</h2>
    <h2 className='bs'><img src='./images/js.png' alt='html' width= "102rem"></img></h2>
    <p className='texts'>Lorem Ipsum is simply dummyLorem Ipsum is simply dummy text of 
     
    </p>
    <div className='buttonss '>
    
    <NavLink to='/javaScript' className= "buttons">LEARN ME</NavLink>
    </div>
 <div/>
    
    </div>
    <div className='htmle'>
    <img src='./images/htmle.png' alt='htmleg' width="480rem"></img>
    </div>
 
    
    </div>

 
 

    
    <div className='sample3 s3 ss1 sm' aria-disabled="true">

    <div className='cover'>
    
    <h1 className='as'>HELLO I'M</h1>
    <h2 className='bs'>NODE JS</h2>
    <p className='texts'>Lorem Ipsum is simply dummyLorem Ipsum is simply dummy text of 
     
    </p>
    <div className='buttonss'>
    
    <NavLink to='/nodeJs' className= "buttons">LEARN ME</NavLink>
    </div>
 <div/>
    
    </div>
    <div className='htmle'>
    <img src='./images/htmle.png' alt='htmleg' width="480rem"></img>
    </div>
 
    
    </div>
 
    </div>
    
    <Outlet/>
    
    </>
  )
}
