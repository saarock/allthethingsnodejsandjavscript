import React, { createContext } from 'react';
import { useState , useContext} from 'react';
// import { BsArrowLeftRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


// export const ResultContext = createContext({});
export default function Singin() {
const redirect = useNavigate();

// const [userD, userDataSava] = useState({})



const [data, singUp] = useState({

  email: "",
  password: "",
  repassword: "",
 


  })
// const {myuserdata , myuserdataValue} = useState();
  function handelInputs(e) {
    const name = e.target.name;
    const value = e.target.value;
    singUp({...data, [name]: value})
    // console.log(data)
   
  }





 async function sedData(e) {
try {
  e.preventDefault()
  console.log('Sending')

    // POST request using fetch with set headers
   const { email , password, repassword  } =  await data;

    const requestOptions = await {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json'
         
         
      },

     body: JSON.stringify({ email:email  , password:password , repassword:repassword  
     })

  }
  // redirect('/')
  console.log('Fetching start')

const res = await fetch('/singin', requestOptions);
const result = await res.json();
if(res) {
  console.log(result)

  const co = result.tokens;
  document.cookie  = await co;
  console.log( result)
  // dataUser(result)



 

  redirect('/')
 
} else {
  Window.alert('password donot matched');
}


console.log(res)

   

     
 
} catch(err) {
  // alert('What are you doing')
  console.log(err + "Your err name")
}
}
 



 
  return (
    <>
  


    <div className='formbox'>
    <form method ="POST" className='formsdata'>
 

 

 

    <label for="email">Email</label>
    <br/>
    <input type="email" name='email' className='type' onChange={(e)=> handelInputs(e)}/>
    <br/>


    <label for="password">Password</label>
    <br/>
    <input type="Password" name= 'password' className='type' onChange={(e)=> handelInputs(e)}/>
    <br/>


    <label for="repassword">Repassword</label>
    <br/>
    <input type="Password" name= 'repassword' className='type' onChange={(e)=> handelInputs(e)}/>
    <br/>

    
<input type="submit" value="login" className='singup button b1' onClick={sedData} ></input>
<span style={{color:  "red"}}>Donot have account</span><a href='/singup'>Singup</a>

    </form>
  
    </div>
    
    </>
  )
}




