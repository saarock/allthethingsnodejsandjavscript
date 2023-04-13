import React from 'react'
import {  NavLink } from 'react-router-dom';
import { BsCaretRightFill } from "react-icons/bs";


export default function HtmlHomeRead() {

  async function copy(e) {
    let code = document.getElementsByClassName('codehtml1')[0];
    
    console.log(typeof code.innerHTML)
 
    console.log(code)

  
    await navigator.clipboard.writeText(code.innerHTML)
console.log(code.innerHTML)
 
    e.target.value = 'copied'
    setTimeout(() => {
      
      e.target.value= 'copy'
    },1000)
  }


  let a = `
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

</body>
</html>
  `
 
  return (
    <>
    
  <div className='allhtml'>
  <div className='nextbutton2'>
  <button className='middlelearn'>next</button>  
  </div>



   
    
    
    <div className='readHomel'>
   

    <h1 className='htmlheading'>HTML TUTORIAL</h1>
    
<div>
   <ul>
   
   <li className='simple'>  HTML is the standard markup language for Web pages.</li>
   <li className='simple'>  With HTML you can create your own Website.</li>
   <li className='simple'>    HTML is easy to learn - You will enjoy it!</li>

   </ul>
 </div>
 
 <hr/>
 <h2 className='htmlheading'>Easy Learning with HTML "Try it Yourself on code editor"</h2>

 <h3 className='htmlheading note'><BsCaretRightFill/> if you dont't know what is code editor then click the below button</h3>

 <div className='middlelearn'>
 <NavLink to="/clickme" className="middlelearn">Click me</NavLink>
 </div>
 <hr/>
    <h1 className='htmlheading'>Features of HTML</h1>
  <ul>
  
  
  <li className='simple'>It is platform-independent.</li>
  <li className='simple'>IT is the  HyperText Markup Languauge that help to make the Website.</li>
  <li className='simple'>HTML can be intergrate with other language like CSS, javaScript.</li>
  <li className='simple'>It is user in frontend or client side.</li>
  
  </ul>
  <hr></hr>
<h1 className='htmlheading'>Why HTML is called HyperText markup Languauge?</h1>
<p className='simple'><BsCaretRightFill/> Hypertext means machine readable text and the Markup Languauge
 means Languauge that use set of tags and tells the browser to display the word. </p>
<hr/>

<div className='spineter'>
<h1 className='htmlheading'>History of HTML</h1>
<p className='simple'><BsCaretRightFill/> The first version of HTML was written by Tim Berners-Lee in 1993. 
Since then, there have been many different versions of HTML. The most widely used version throughout the 2000's was HTML 4.01, which became
 an official standard in December 1999. Another version, XHTML, was a rewrite of HTML as an XML language.</p>



<hr/>

<h1 className='htmlheading'>Why HMTL?</h1>
<p className='simple important'><BsCaretRightFill/> HTML—“HyperText Markup Language”—is the language used to tell your web browser what each part of a website is. So, using HTML
, you can define headers, paragraphs, links, images, and more, so your browser knows how to structure the web page you're looking at.</p>
<hr/>

    <h2 className='htmlheading imph'>
  
HTML IMPORTANT SYNTAX CODE
    </h2>


    <pre className='codehtml1'>
    
    {a}
    </pre>




<input type="button" value="copy" className='copybtn' onClick={(e)=>copy(e)}></input>





</div>










    </div>
    
    
    
  
 
    






</div>
    
    </>
  )
}













