import React from 'react';
import { BsHandThumbsUp,  BsHandThumbsDown } from "react-icons/bs";
import './lookit.css'
import { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from 'react';
import Nointernet from './Nointernet/Nointernet';
import Loading from './loading'
import PhotoNo from './Nointernet/PhotoNo';
// import  fs from 'fs'

// import { use } from '../../backend/router';

export default function Lookit() {
  let [increse, setincrese] = useState(0);
  let [images, forimage] = useState([])

  let commeNts = useRef()


  useEffect( () => {
    let a = false
    if(a == false) {
     gonandTakesphotos()
    }

async function gonandTakesphotos() {
  let res = await fetch('/takeallthedata', {
    method: 'POST'
  });
  let data = await res.json()

if(data) {
  console.log(data)
 
  console.log(data)
 await forimage(data.alltheDatasofThedatabase)


 console.log(images.alltheDatasofThedatabase)
} else {
  return
}
}
    

return () => {
  a = true
}


  
},[])
  


    function likeIncrease() {
setincrese(a => a+1)
  }




  function likeDecrease() {

  }


  function commEnts() {
    // alert('Click')

  }

 




  function PostComments(e) {
    console.log('Done you click')

    e.target.innerHTML = 'posted...'
    setTimeout(() => {
      e.target.innerHTML = 'post'
    }, 3000)
    // e.target
    // alert('Done')
  }

  // console.log(images.alltheDatasofThedatabase[46].Profile_photos)
  //   function ShowNow(e) {
  //     if(e.target.innerHTML == 'Show Comments'){
  // commeNts.current.style.display = 'block';
  // e.target.innerHTML = 'Hide Comments';
  //     }
  // else if(e.target.innerHTML == 'Hide Comments' ){
  //   commeNts.current.style.display = 'none';
  //   e.target.innerHTML = 'Show Comments';
  // }


  //   }

console.log(images)

  return (
  <>
    
    <div className=' mainud bg-dark'>
   

    <div className='side-setting'>

    <h3 className='ab'>Online friends</h3>



    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    </div>


    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    

    </div>
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    



    </div>
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    


    </div>
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    


    </div>
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    


    </div>
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    


    </div>
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    


    </div>
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    


    </div>
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    


    </div>
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    


    </div>
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    

    </div>
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    

    </div>
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    


    </div>
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    


    </div>
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    


    </div>
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    


    </div>
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>

    </div>





 
 
  



   


</div>











          
        







 






<div className="uploadphotostosee">



{
  images? images.map((c) => {
 
 console.log(c)
 
 let path = c.Profile_photos

 console.log(path)

 let array = Object.keys(c)




    return (
 

      
<div className='photossee'>

<div className='whoupload'>
<div className='who'>

<img src={c.Profile_photos[0]? `${path}`:'/images/b.jpg' } alt='profile' width="150px" height="150px" className='who ' onDoubleClick={likeIncrease}></img>
<h3 className='namewho b'>{c.name? c.name: "Loading..."}</h3>
<p>Idichchha gautam upload {array[4]} 0n 2023</p>
</div>



</div>
<img src={c.Profile_photos[0]? `${path}`:'/images/b.jpg' }  width="800px" height="500px"></img>

<div className='likeicons'>

<span className='like'> <BsHandThumbsUp className='like' onClick={likeIncrease}/>{increse}</span>

<div className='coombtn'>
<div className='allshowcomandlike'>
<button className='seeLikes'>See who likes</button>
<button className='seeComments'>Show Comments</button>
</div>








<div className='bigdiv' ref={commeNts}>
<div className='unav'>
<h3 className='pnav'><span className='cName'>Aayuwsh</span> <img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img>Wow very nice</h3>

</div>




</div>















<div className='showcomments'>
<input type='text' className='textC' placeholder='Comments...'></input>
<button className='postComment' onClick={PostComments}>post</button>

</div>
</div>
<span className='unlike'><BsHandThumbsDown className='unlike' onClick={likeDecrease}/>21</span>  
</div>

</div>
















  
  
  









  
  
















    )
  }): <PhotoNo/>
}


</div>











 
 










    
<div className= 'iiC'>
    <h5 className='fr'>Your friends</h5>
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    
    </div>
    
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    </div>
    
    
    
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    </div>
    
    
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    </div>
    
    
    
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    
    </div>
    
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    
    </div>
    
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    
    </div>
    
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    
    </div>
    
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    </div>
    
    <div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    
    </div><div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    
    </div><div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    
    </div><div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    
    </div><div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    
    </div><div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    
    </div><div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    
    </div><div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
    
    </div><div className='unav'>
    <NavLink to='/' className='pnav'> Aayuwsh<img src='/_imgaes_img_mom.jpg' alt='me' width="50px" height="50px"  className='himg'></img></NavLink>
 
    </div>
    
    
    </div>
    
      








































</div>





</>


  )


}










