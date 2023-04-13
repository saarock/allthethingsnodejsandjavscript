import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { BiAlignLeft } from "react-icons/bi";
import { BsXLg, BsSearch, BsHouseFill, BsReddit, BsMenuButtonWide, BsOctagon } from "react-icons/bs";
import { io } from "socket.io-client";
import { useRef } from 'react';




export default function App() {

// It can be done by destructuring;
const ref = useRef();
const icon = useRef();
const cutnav = useRef();

// also

  // I have used on the some component uncontrolled method and one of them this also includes;
  let openNavs = {
    fontSize: "30px",


  }



  const search = {
    fontSize: "30px"
  }

  //to show the navss
  // let navs;
  // let show;
  // let cut;
  // let searchs;

  function showNavs(e) {
    // navs = document.getElementsByClassName('navs')[0];
    // show = document.getElementsByClassName('icons')[0];
    // cut = document.getElementsByClassName('cutNav')[0];
    ref.current.style.display = "block";
    icon.current.style.display = "none";
    cutnav.style.display = 'block';

  }
  let cutNavs = {

  }


  //to cut the navs

  function cutNavBar() {
    cutnav.current.style.display = 'none';
    ref.style.display = 'none';
    icon.style.display = "block";
  }


  // to show the search
  window.addEventListener('click', (e) => {
    e.stopImmediatePropagation()
    // searchs.style.display = 'none';

  })



  function openHtmlNav(e) {
    if (window.location.href == "http://localhost:3000/comments" || window.location.href == "http://localhost:3000/services" || window.location.href == "http://localhost:3000/" || window.location.href == "http://localhost:3000/about") {
      alert('What are you doing');
    }

    let a = document.getElementsByClassName('HTML')[0];

    if (e.target.value == 'closenav') {
      a.style.display = 'none';
      e.target.value = 'opennav';



    }
    else if (e.target.value == 'opennav') {

      a.style.display = 'block';
      e.target.value = 'closenav';
    }

  }




  return (
    <>
      <header>

        <div className='head'>
          <img src='images/logo.png' alt='logo' width="150rem" className='logo'></img>
          <span className='icons' ref={icon}><BiAlignLeft style={openNavs} onClick={(e) => showNavs(e)} />

          </span>

          <span className='cutNav' ref={cutnav}><BsXLg style={cutNavs} onClick={(e) => cutNavBar(e)} /></span>

          <input type="search" name='search' className='search' placeholder='Search...'></input>
          <span className='searchicon' >
            <BsSearch style={search} />

          </span>
          <div className='opens'>

            <input type="button" className='button b1' value="closenav" onClick={(e) => openHtmlNav(e)} ></input>
          </div>


          <div className='navs' ref={ref}>

            <ul className='navbars'>


              <li className='nav'><NavLink to='/' className="navbar">Home<BsHouseFill /></NavLink></li>

              <li className='nav'><NavLink to='/services' className="navbar">Services<BsReddit /></NavLink></li>


              <li className='nav'><NavLink to='/lookit' className="navbar">Lookit  <BsMenuButtonWide /></NavLink></li>


              <li className='nav'><NavLink to='/about' className="navbar">About<BsMenuButtonWide /></NavLink></li>


              <li className='nav'><NavLink to='/logout' className="navbar">Logout<BsOctagon /></NavLink></li>



            </ul>

          </div>




        </div>

      </header>
      <Outlet />

    </>
  )
}

// export default socket;