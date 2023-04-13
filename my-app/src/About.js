import React, {useContext, useEffect} from 'react';
import './styles/aboutDiv.css';
import { userData } from './Home';



export default function About() {

  let theDataOfTheUserCurrentUser = useContext(userData);
  console.log(theDataOfTheUserCurrentUser)


  useEffect(() => {
    let start = true;
    if(start) {
      console.log(theDataOfTheUserCurrentUser, 'This is the userhome pages');
    } 

    return () => {
      start = false;
    }
  }, [theDataOfTheUserCurrentUser])



  function gO() {
    window.location.href = 'http://localhost:9000/getData/'
  }
  return (
  <>
  

  <div className="container bg-dark aboutDiv">

<div className="btnA">

<button className='btn btn-danger abBtn' onClick={gO}>Go to watch the Blogs..</button>
</div>



<div className="aboutForm">
<form action="#" className='ff'>

<textarea name="blog" id="" cols="80" rows="5" className='blogtext' placeholder='Descriptions..'></textarea>
<div className="prodP">


<input type="number" name="" id=""  className='inputPrice'/>
<select name="sign" id="" className='cur'>

<option value="">Choose Currencey</option>
<option value="$">$Dollor</option>
<option value="Rs">Rs Nepali</option>
<option value="NRI">NRI Indian</option>

</select>
</div>



</form>

</div>
  </div>
  
  </>
  )
}
