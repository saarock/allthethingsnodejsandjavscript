import React, { createContext } from 'react';
import {  json, NavLink } from 'react-router-dom';
import {  BsCameraReelsFill, BsChatSquareDotsFill} from "react-icons/bs";
import { useState } from 'react';
// import socket from './Socket';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Users from './UserId/Users';

// import Nointernet from './Nointernet/Nointernet';
import Nointernet from './Nointernet/Nointernet';
import Home1 from './HomeDiv/Home1';

const userData = createContext({});
export default function Home(middlenav) {

  const foruserid = useRef();
  const startchat = useRef();
  const formPhoto = useRef();
  const [profile_Picture, setprofile]  = useState(null);

  // const {userRead, userReaders} = useState({});
  // These are the controlled method;
  const naviGate = useNavigate(null);
  const [styleU, setstyleU] = useState({
    display: "none"
  });

  const [ud, sud] = useState(null);
  const [getallsuer, setalluser] = useState(null);
  // const [p, sp] = useState('');
  const forAllusers = useRef();
  useEffect( () => {
let start = true;


    // async function getAllUsers(){
      try {
    
        if(start) {

    async function getUserData() {

      if (!document.cookie) {
        naviGate('/singin');
    
      } else {
        console.log(document.cookie);
   
      
      }
    
      const myCookie =  document.cookie;
      let isCancelled = false;
      const res = await fetch('/sendcook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cookie: myCookie }) //server only accept the string data  so  JSON.Stringify() makes the string;
      });
   let datasss = await res.json();
  // console.log( setUserData(datasss))
// sud('mynmae said')
if(res) {
  sud(datasss)

// Important things ;

  localStorage.setItem('chatter', JSON.stringify('5346y756u7'))



} else {
  naviGate('/singin');
}

// console.log(ud.firstname)
      if (isCancelled) {
        // window.alert("autherization falied")
    
      } else {
  
        // Clean up function
        isCancelled = true;
        return isCancelled;
      
      }
    
    // return the clean up function
      return () => {
    isCancelled = true;
      }
    
    }





async function  getAlluserss(e) {
  try {
    // alert('fetching the data')
    // e.preventDefault()
    const res = await fetch('/', {
      method: "POST"
    });
    await res.clone();
    console.log(res)
    const data = await res.json();

    if(res) {
      console.log(data)
      setalluser(data)
      console.log(getAlluserss)
    } else {
      naviGate('/singin');
      // alert('')
    }
    
  
  } catch(err) {
    console.log(err)
  }
}





    if(ud == null ) {
    
    console.log('Done')
   getUserData()


    } 
     if(getallsuer == null) {
      getAlluserss()
    }



    else {
      // console.log(ud)
alert('you have already data')
     
      return;
    } 





        }








        return () => {
          start = false;
        }


 
  } catch(err) {
    console.log(err)
  }






  }, []);




  const [tr, trano] = useState({
    transform: "translate(-200rem)",
    overflow: "hidden"
  });

  const [open] = useState({ display: "none" });
  const makeclick = useRef();
  const img = useRef();
  const [saveimage, yourimage] = useState();

  // To change the bio;
  const [change, bio] = useState();
  const statusbio = useRef();



  const openbioEdit = (e) => {
    if (tr.transform === 'translate(-200rem)' || tr.transform === 'translate(200rem)') {
      trano({ transform: "translate(0)" });

    }
  };


  const cancelEdit = () => {
    trano({
      transform: "translate(200rem)",
      overflow: "hidden"
    });
  };


  const cancle = () => {
    setstyleU({ display: "none" });
    img.current.src = '';

  };




  // let datass = {};


  // Show the image on the clientside;
 async function openFiles(e) {
  try {
e.preventDefault()
    makeclick.current.click();
    makeclick.current.addEventListener('change', () => {
      setstyleU({
        display: "block",
        display: "flex",
        flexDirection: "column",
        justifyCcontent: "center",
        alignItems: "center",
        transition: 0.3 + "s easy in out"
      });


      const img = makeclick.current.files[0];
      const file = new FileReader();
    
      file.addEventListener('load', () => {
        const imageS =  makeclick.current.files[0];
        console.log(imageS)
        setprofile( imageS)
        // setprofile(imageS)
      
        // sp(makeclick.current.files[0]);
        // console.log(p)
      
        console.log(file.result);
        yourimage(file.result);

        // console.log(profile_Picture)
      })


      if (img) {
        file.readAsDataURL(img);
      }


    })
  } catch(err) {
    console.log(err)
  }
  }


  // To change the bio the function;
  const saveBio = () => {
    const status = statusbio.current.innerHTML;
    bio(status);
    trano({
      transform: "translate(200rem)",
      overflow: "hidden"
    });
  }

// function makeChange(e) {
//   setprofile(e.target.files[0])
//   console.log(profile_Picture, 'This is profile')
// }
console.log(profile_Picture)



  async function postProfile(e) {
    try {
      e.preventDefault();
// alert('Again done')

//     const p = new FormData(formPhoto.current)
//     console.log(p.get('profile_picture'))
//      p.append(makeclick.current.name, makeclick.current.files[0])
//     console.log(p)
//     console.log(p.entries())

const formData = new FormData();
formData.append('profile_picture' , profile_Picture );
formData.append('realuser' , document.cookie );
formData.append('name', ud.firstname )
formData.append('caste', ud.lastname)

console.log(formData)
console.log(formData)

const data = await fetch("/uploadImage", {
  method: "POST",
  body: formData,


    
}) 

const res = data.json()
const hereIimage = res.then((data) => {
  let s = data.imagecd
  console.log(data)
  console.log(s)
}).catch((er) => {
  console.log(er)
})
console.log()
alert(res)

      // const res = await fetch('/uploadprofile', {
      //   method: 'POST',
        
      //   headers: {
      //     'Content-type' : 'multipart/form-data boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
      //   },
      //   body: p.get('profile_picture')
     


      // })

      // const profilePhoto = res.json()
      // console.log(profilePhoto)
      // const response = await axios.post('/uploadImage', profile_Picture);
      // console.log(response.data);
      // console.log(response.body)
      // console.log(response)
      // const profile = await response.json();
      // console.log(profile);
  
     

    } catch(er) {
      console.log(er)
    }



  // alert(c.firstname)
  }

  // yourimage(file.result);
//   
// formData.append('image', file);
  

//   function postProfile(e) {
// // window.alert('Done')
//   }


  // function look() {
  //   const formData = new FormData();
  //   formData.append('image', makeclick.current.files[0]);
  // sp(formData);
  // }

  // onClick={(e) => openFiles(e)}

// ud

  return (
    <>
    <userData.Provider value={ud}>

  {/* <userData.Provider/> */}
    <div className='mycover' style={{display:'flex', flexDirection:"column", justifyContent: "center", alignItems:"center", background:"#263238"}}>
    <img src= {saveimage? saveimage:'/images/b.jpg '} alt='me' width="500px" height="350px" className='mycover'></img>
    </div>
  


        <div className='aboutsample ass'>
     
          <div className='sample1 s'>
     

            <h1 className='a'>HELLO I'M</h1>
            <img src='/images/a.jpg' alt='me' width="200px" height="200px" className='himg'></img>
            <h2 className='b '>  {ud? ud.firstname : "Loading..." }</h2>
            <div className='center'>
              <p className='text'>
                {change}
                
                  
                {ud? ud.bio : "Loading..." }
              
              
           
             
  
 </p>
            </div>
            <form onSubmit={postProfile} encType="multipart/form-data" ref={formPhoto}>
            <div className='btn'>
              <button className='button b1' onClick={openbioEdit}>Edit bio</button>
              <input type="file" name='first_name' style={open} ref={makeclick}  ></input>
              <button className='button b2' onClick={openFiles}>Edit profile
              </button>
            
            </div>
    

            <div className='up' style={styleU}>
              <div className='uploadprofile'>
                <div className='cac'>
                  <input type="button" className='button b1' onClick={cancle} value="Cancel" />
                  <button className='button b1' onClick={(e) => openFiles(e)}>change photo</button>
                </div>

                <div className='imageprofile'>
                  <img src={saveimage} ref={img} alt='adfa' className='Pimg' height="299px" width="493px" />
                </div>
            
                <button type='submit' className='button po'>Post</button>
              </div>
            



            </div>





            </form>



            <div className='bio' style={tr}>

              <div className='editbio'>
                <input type="text"  ref={statusbio}></input>
                <input type="button" className="button" value="Save" onClick={saveBio}></input>
                <input type="button" className="button" onClick={cancelEdit} value="cancel"></input>
              </div>



            </div>







          </div>








        </div>




        <div className='anothernav'>

          <NavLink to="photos" className='photosShow'>   </NavLink> <BsCameraReelsFill className='addphoto'></BsCameraReelsFill>
          <BsChatSquareDotsFill className='addphotos' />
          <input type="file" className='addphotoss' ></input>

        </div>
        <div className='myprofilesphoto'>
          <div className='sidenav'>
   {
 
    getallsuer? getallsuer.map((c,i)=> {
      console.log(c.firstname)




// let encoded = window.btoa(c._id)






return( <div className='unav'>


    <NavLink to={{pathname:`/user/ssdflgvsdl563456943u5gsdfgsdf858654lkjkji${encodeURIComponent(c._id) }034546`, state:{user: c}}} onClick={(e) =>{
      // e.preventDefault();
// foruserid.current.style .display = 'block'














  
    }} className='pnav'>{c.firstname}  <img src='/images/a.jpg' alt='me' width="50px" height="50px"  className='himg'></img>{c.tokens==document.cookie? 'You': ''}</NavLink>
  
    </div>

    
 


)

    }): <Nointernet/>
   
   }

   





          </div>

          <div className='container-fluid bg-dark '>
          {<Home1 data = {ud}/>}
      <div className='uu' ref={foruserid}>
      <Users/>
      </div>
          
       
          </div>


        </div>
    
     


        </userData.Provider>

       
       
    </>
  )
}




export {userData};

