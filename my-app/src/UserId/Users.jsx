import React, { useId } from 'react';
import { useFetcher, useLocation } from 'react-router-dom';
import './Users.css';
import io from 'socket.io-client';
import { useState, useRef, useContext, useEffect } from 'react';
import { userData } from '../Home';





// import { set } from 'mongoose'

export default function Users()  {

  let usernames = useContext(userData);
  // console.log(usernames);

  // useState hook from handelling the message from the form
  let [message, setMessage] = useState(null);
  let [socket, setSocket] = useState(null);
  let [socketMessage, setSocketMessage] = useState([]);
  let [setm, setId] = useState([]);
  // let [set, ok] = 
  let input = useRef();
  const location = useLocation();
let [mymessgae, setMymessage] = useState([]);
let [userIdS, setUserId] = useState();
let [sender, setSenderId] = useState([]);



useEffect(() => {

  let cokie = document.cookie;

  getTheId();

  async function getTheId() {
    // console.log('stargin')
    let res = await fetch('/giveId', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({cokie})

    })

    let data = await res.json();
    // console.log(data, "lauday123")
    let id = await data.id._id;
    // setm.push(id);
    
     await setId(id);
    //  console.log(setm, "laudya")
     setSenderId(id);

  }
},[])



useEffect(() => {

  const encoded = location.pathname.replace([/user/], '');
  const decoded = decodeURIComponent(encoded).slice(41, -6);
  console.log("This is the setm", sender)
  let datas = {setm, decoded}

async function goTake() {
  try {
let res = await fetch('/getMessages', {
  method: 'POST',
  headers : {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({datas})
})

let messages = await res.json()
console.log(message);
  } catch(er) {
    // console.log(er);
  }
}

if(setm) {
  goTake();
}
  
}, [sender])






  useEffect(() => {
    // let setm = [];

    let mounteed = true;

    if(mounteed) {


    // console.log(usernames.id._id, 'This is your usernames')
   
    // console.log(decoded)

    // console.log(setm);

    const newSocket = io.connect('http://localhost:8000');
    setSocket(newSocket);
    // console.log(socket, "THAT IS MY SOCKET")


  
   
 

    newSocket.on('getMessage',  data => {
      let datas = data.text;
    
      const encoded = location.pathname.replace([/user/], '');
      const decoded = decodeURIComponent(encoded).slice(41, -6);
      if(data.senderId == decoded) {
        alert('Milyo')
     

        setSocketMessage((otherMessage) => [...otherMessage, datas]);
        // console.log(socketMessage,"This is your socket messsgae");

    } else {
      alert("Milayna")
    }

   

    })


      // console.log('Ok user', socket)
// newSocket.on('ownmessage',  (text, id) => {
//   const encoded = location.pathname.replace([/user/], '');
//   const decoded = decodeURIComponent(encoded).slice(41, -6);
//   console.log(decoded , id, "III")
//   if(decoded == id) {
//   console.log(text, "THIS IS MY  OWN MESSGAE");
//   setMymessage((prevMessages) => [...prevMessages, text]);
//   } else {
//     // alert("No")
//   }
  
// })





  
//   newSocket.on('getMessage',  data => {
    // console.log('getting Messgae')
// console.log(data," And your message is")
//   })


  

  if(setm) {
    let username = setm;

   newSocket.auth = {username};

    } else {
    
    }


    newSocket.on("connect_error", (err) => {
      if (err.message === "invalid username") {
        this.usernameAlreadySelected = false;
      }
    });


 

  //   //if message come from the server then emit it;
 


} 






    return () => {
      // newSocket.disconnect()
mounteed = false;

    }


  },[setm])



   


// My Own messgae
    useEffect(() => {
      if(socket) {
       console.log('yes', socket)
        socket.on('ownmessage',  (text, id) => {
          const encoded = location.pathname.replace([/user/], '');
          const decoded = decodeURIComponent(encoded).slice(41, -6);
          console.log(decoded , id, "III")
          if(decoded == id) {
          console.log(text, "THIS IS MY  OWN MESSGAE");
          setMymessage((prevMessages) => [...prevMessages, text]);
          } else {
            // alert("No")
          }
          
        })
        
        
      } else {
        // alert("No")
        console.log('Now3')
      }
    }, [socket])


useEffect(() => {

  if(socket) {

  socket.on('welcome', data => {
    // console.log(data)
  })
  } else {
    return;
  }
}, [socket])



// console.log(socket, "THE MAIN")
// // Send tne userid;
// console.log('ADDNING THE USER...', socket);

// // useEffect(() => {
  // console.log('ADDNING THE USER...', socket);

// if(socket) {
  // console.log('ADDNING THE USER...', socket);
// socket.emit('addUser', setm);
// } else {
//   return;
// }
// // },[])



useEffect(() => {


  if(socket) {
    // console.log('getting users')
  socket.on('getUsers',  users => {
console.log(users, "All teh users")
  })
  } else {
    return;
  }
  },[])
  
  

useEffect(() => {
  if(socket) {
    // console.log('getting users')
  socket.on('againUser',  users => {
console.log(users, "Again all the users")
  })
  } else {
    return;
  }
  },[])


  useEffect(() => {
    if(socket) {
      const encoded = location.pathname.replace([/user/], '');
      const decoded = decodeURIComponent(encoded).slice(41, -6);
      socket.emit('addUser', decoded)
    }
  }, [socket])

// useEffect(() => {
// //   console.log('Starting...')

//   // console.log('Ok user', socket)
// socket.on('ownmessage',  text => {
//   console.log(text, "THIS IS MY  OWN MESSGAE");
//   setMymessage((prevMessages) => [...prevMessages, text]);
  
// })

// }, [])

  
 
// useEffect(() => {
  // console.log('My user messsgae')
//   if(socket) {
    // console.log('getting Messgae')
//   socket.on('getMessage',  data => {
// console.log(data," And your message is")
//   })
//   } else {
//     return;
//   }
//   },[]) 


  function setMessages(e) {
    setMessage(e)
  
  }




  // Send button which is emit from send button of the form
  function sendMessage() {
    // console.log(setm, "Mmamam")
  
    // let decoded = decodeURIComponent(encoded).slice(41, -6);
    var encoded = location.pathname.replace([/user/], '');
    var decoded = decodeURIComponent(encoded).slice(41, -6);
    setUserId(decoded);
  
    // setUserId(decoded);

    if (socket) {
      // console.log(socket)  
      // console.log(decoded)
      socket.emit('sendMessage', {
        senderId:setm,
        reciverId: decoded,
      text: message



      });

      // setMymessage((prevMessages) => [...prevMessages, message])
    

    } else {
      // console.log('Scoket io is not connected...')
      return;
    }


  }


  // console.log(socket, "THE MAIN")
// // Send tne userid;
// console.log('ADDNING THE USER...', socket);

// // useEffect(() => {
  // console.log('ADDNING THE USER...', socket);

// if(socket && setm.length == 1) {
//   // console.log('ADDNING THE USER...', socket, setm);
// socket.emit('addUser', setm);
// } else {
//   // console.log('What the fuck.');
// }
// },[])




  // alert('Done')


  // console.log(props.user)


  // const user = users.find((user) => user.id === parseInt(id));



  return (



    <div className='usersId '>



      <div className='userCover'>
        <img src='/images/b.jpg ' alt='me' width="540px" height="350px" className='mycover'></img>

      </div>


      <div className='userProfile mt-5'>
        <img src='/images/a.jpg ' alt='me' width="250px" height="250px" className='himg'></img>

      </div>
      <div className='addfriendbtns mt-4'>
        <button>Add friends</button>
        <button>Message</button>

      </div>


      <div className="allthechats">


        <div className="chat">

          <div className="callorwhat"></div>
          <div className="allsmallmessage">

            <img src='/images/a.jpg ' alt='me' width="50px" height="50px" className='otherimg'></img>

       

            {/* <div className="smallmessageother">{socketMessage}</div> */}

            {/* <div className="smallmessagemy">{mymessgae}</div> */}

            

            {
              mymessgae.map((c, i) => {
                // console.log(c, 'ABCDE')
                return (
                  <>
           <div key={i} className="smallmessagemy">{c}</div>
                  
                  </>
                )
              })
            }
           {
              socketMessage.map((c, i) => {
                // console.log(c, "AAAAAAAABbbbbbb")
                return(
                  <>
            <div key={i} className="smallmessageother">{c}</div>
                  </>
                )
              })
            } 


          
          </div>


          <div className="inputtext">
            <input type="text" className="text" ref={input} onChange={(e) => setMessages(e.target.value)} placeholder='type message...' />
            <input type="button" value="send" className='sendbtn' onClick={sendMessage} />
          </div>
















        </div>








      </div>

    </div>
  )
}
