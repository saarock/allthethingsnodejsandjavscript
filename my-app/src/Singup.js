import React from 'react';
import { useState } from 'react';
import { BsArrowLeftRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

export default function Singup() {
const redirect = useNavigate();
const userData  = useContext('')

const [data, singUp] = useState({
  firstname: "",
  lastname: "",
  gender: "",
  email: "",
  password: "",
  repassword: "",
  favriouteProgrammingLanguage: "",
 

  bio: "",



  })
// const {myuserdata , myuserdataValue} = useState();
  function handelInputs(e) {
    const name = e.target.name;
    const value = e.target.value;
    // const files = e.target.files[0];
    singUp({...data, [name]: value});
    // singUp({...data, [name]: files});
    console.log(data);
   
  }

 





 async function sendData(e) {
try {
  e.preventDefault()
  console.log('Sending')

    // POST request using fetch with set headers
   const {firstname, lastname, gender , email , password, repassword , favriouteProgrammingLanguage ,  bio} =  await data;
  //  const {}
  //  const 

    const requestOptions =  {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json'
         
         
      },

     body: JSON.stringify({ firstname:firstname , lastname: lastname , gender:gender,email:email  , password:password ,  bio ,repassword:repassword , favriouteProgrammingLanguage:favriouteProgrammingLanguage , 
     })

  }
  // redirect('/')
  console.log('Fetching start');

const res = await fetch('/singup', requestOptions);
const result = await res.json();
if(res.status == 200) {
  console.log(result)
  setCookie(result)
  redirect('/singin')
}

console.log(res)

 
} catch(err) {
  // alert('What are you doing')
  console.log(err + "Your err name");
}
}
 
async function setCookie(data) {
  const co = await data.tokens;
  console.log(co)
  // document.cookie  = await co;
}


 
  return (
    <>


    <div className='formbox' >
    <form method ="POST" className='formsdata' enctype='multipart/form-data'>
    <label for="firstname">Firstname</label>
    <br/>
    <input type="text" className='type' name='firstname' onChange={(e)=> handelInputs(e)} required/>
    <br/>

    <label for="lastname">Lastname</label>
    <br/>
    <input type="text" className='type' name='lastname' onChange={(e)=> handelInputs(e)} required/>
    <br/>

<label for= "gender">Gender</label>
<br/>
<select name='gender' onChange={(e)=> handelInputs(e)} required>
<option value= ""  id="male">Select..</option>

<option value= "male"  id="male">Male</option>
<option value= "female  " id="female">female</option>
<option value= "other"  id="other">other</option>

</select>
<br/>

    <label for="email">Email</label>
 
    <br/>
    <input type="email" name='email' className='type' onChange={(e)=> handelInputs(e)} required/>
    <br/>


    <label for="password">Password</label>
    <br/>
    <input type="Password" name= 'password' className='type' onChange={(e)=> handelInputs(e)} required/>
    <br/>


    <label for="repassword">Repassword</label>
    <br/>
    <input type="Password" name= 'repassword' className='type' onChange={(e)=> handelInputs(e)} required/>
    <br/>
<label for='favriouteProgrammingLanguage'>  What is your FavriouteProgrammingLanguage?</label>
<br/>
<input type="text" name='  favriouteProgrammingLanguage' className='type' onChange={(e)=> handelInputs(e)} required></input>
<br/>

<br/>
<label for='bio'>bio</label>
<br/>

<input type="text-field" name='bio' className='type' onChange={(e)=> handelInputs(e)} col='12' required></input>

    <br/>


    
<input type="submit" value="singup" className='singup button b1' onClick={sendData} ></input>
<span style={{color:  "red"}}>Already have account</span><a href='/singin'>Singin</a>

    </form>
    
 
    </div>
    
    </>
  )
}
