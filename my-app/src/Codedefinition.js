import React from 'react'
import Html from './Html';
import { BsCaretRightFill } from "react-icons/bs";
import {  NavLink } from 'react-router-dom';


export default function () {
    let a = `
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
  `
  return (
    <>

 <div className='htmlhomec'>
 
 {<Html />}


 <div className='allhtml'>
 <div className='nextbutton2'>
 <button className='middlelearn'>next</button>  
 </div>



  
   
   
   <div className='readHomel'>
  

   <h1 className='htmlheading'>HTML CODE? WHAT DOES THEY MEAN?</h1>
   
<div>
<h2 className='htmlheading imph'>1)<BsCaretRightFill/>    &lt; !DOCTYPE html &gt;</h2>
  <ul>
  
  <li className='simple imp'> The HTML document type declaration, also known as DOCTYPE, is the first line of code required in every HTML or XHTML document. </li>
  <li className='simple'>  The DOCTYPE declaration is an instruction to the web browser about what version of HTML the page is written in .</li>
  <li className='simple'>   This ensures that the web page is parsed the same way by different web browsers .</li>

  </ul>
</div>

<hr/>


<div>
<h2 className='htmlheading imph'>2)<BsCaretRightFill/>    &lt;html&gt;   &lt;/html&gt;</h2>
  <ul>
  
  <li className='simple imp'> HyperText Markup Language (HTML) is the basic scripting language used by web browsers to render pages on the world wide web.</li>
  <li className='simple'> HyperText allows a user to click a link and be redirected to a new page referenced by that link.</li>

  </ul>
</div>





<hr/>



<div>
<h2 className='htmlheading imph'>3)<BsCaretRightFill/>    &lt;head&gt;  &lt;/head &gt;</h2>
  <ul>
  
  <li className='simple imp'>The head of an HTML document is the part that is not displayed in the web browser when the page is loaded .</li>
  <li className='simple'>A HTML file has headers and a "body" payload — just like an HTTP request. The &lt; body &gt; encapsulates the
   contents of the document, while the &lt; head &gt; part contains meta elements, ie, information about the contents . 
  This is typically title, encoding, author, styling etc.</li>

  </ul>
</div>


<hr/>
<div>
<h2 className='htmlheading imph'>4)<BsCaretRightFill/>    &lt;title&gt;   &lt;/title&gt;</h2>
  <ul>
  
  <li className='simple imp'>The title tag is an HTML code tag that allows you to give a web page a title.</li>
  <li className='simple'> This title can be found in the browser title bar, as well as in the search engine results pages <span className='important'>(SERP)</span>.</li>

  </ul>
</div>

<hr/>


<div>
<h2 className='htmlheading imph'>5)<BsCaretRightFill/>    &lt;body&gt;   &lt;body&gt;</h2>
  <ul>
  
  <li className='simple imp'>The &lt;body&gt; tag defines the document's body .</li>
  <li className='simple'> The &lt;&gt; element contains all the contents of an HTML 
  document, such as <span className='important'>headings, paragraphs, images, hyperlinks, tables, lists,</span> etc.</li>

  </ul>
</div>


   <hr/>
  
  
   
<div className='spineter'>
<h1 className='htmlheading'>WRITE YOUR FIRST HTML CODE AND  RUN</h1>


<p className='simple important'><span className='imph'>note:</span><BsCaretRightFill/>The tags shown in the above are compalsury in code.</p>






<h1 className='htmlheading imph'>Write you first code on Visual Studio code editor.</h1>    
<p className='simple'>Download the Visual Studio Code installer for Windows.
Once it is downloaded, run the installer VSCodeUserSetup-version.exe. This will only take a minute.
By default, VS Code is installed under C:\Users\Username\AppData\Local\Programs\Microsoft VS Code.</p>

<p className='simple important'>Click below the button to download visualstudio code</p>
<a href='https://code.visualstudio.com/'>download</a>

<h1 className='htmlheading imph'>If you donot understatand then watch the video</h1>
<video src='./asf' width='200px' height="200px" autolay></video>
<div className='spineter'>





 


</div>
<hr/>
<h1 className='htmlheading g'>Copy it and try is Yourself</h1>


  

    <pre className='codehtml1'> 
    
   {a}
    </pre>
    <h2 className='htmlheading imp'>Result:</h2>
    <img src='./images/r.png' alt='image' width='600px'></img>
<hr/>

    
</div>
  
</div>
</div>








 </div>





















</>
  )
}
