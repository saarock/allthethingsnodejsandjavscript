import React from 'react';
import { BsCaretRightFill } from "react-icons/bs";
import Html from './Html';

export default function Htmlheading() {
    let  a = `
 <h1>This is heading 1</h1>
 <h2>This is heading 2</h2>
 <h3>This is heading 3</h3>
 <h4>This is heading 4</h4>
 <h5>This is heading 5</h5>
 <h6>This is heading 6</h6>

    
    
    `
  return (
    <>
    <div className='htmlhomec '>
 
 {<Html className="htmlhe"/>}


 <div className='allhtml'>
 <div className='nextbutton2'>
 <button className='middlelearn'>next</button>  
 </div>



  
   
   
   <div className='readHomel'>
  

   <h1 className='htmlheading'>HTML HEADINGS.</h1>
   <p className='simple important'><BsCaretRightFill/> There are 6 types of heading available in html:</p>
   <pre className='codehtml1'>
   
   
   {a}
   
   </pre>
   <h3 className='important'>Result:</h3>
   <img src='./images/he.png' alt='image' width='600px'></img>

<div>
<h2 className='htmlheading imph'><BsCaretRightFill/>    &lt; h1 &gt;</h2>
  <ul>
  
  <li className='simple imp'> It defines the most important heading. </li>
 

  </ul>
</div>

<hr/>


<div>
<h2 className='htmlheading imph'><BsCaretRightFill/>    &lt;h6&gt;   &lt;/h6&gt;</h2>
  <ul>
  
  <li className='simple imp'> The h6 tags defines the less important heading.</li>
  
  
 
  </ul>
<hr/>
  <p className='simple important'><span className='imph'>note:</span><BsCaretRightFill/> Only use one &lt;h1&gt; per page - this should represent the 
  main heading/subject for the whole page. Also, do not skip 
  heading levels - start with &lt;h1&gt;, then use &lt;h2&gt;, and so on.&lt;/p&gt;
</p>
<hr/>

<h1 className="htmlheading">AND WHAT IS &lt;p&gt; &lt;/p&gt;in HTML?</h1>
<p className='simple '><BsCaretRightFill/> &lt;p&gt; defines the paragraph in the html.

</p>
<p className='simple '><BsCaretRightFill/> &lt;p&gt; A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.
</p>
</div>





<hr/>



<div>
<h2 className='htmlheading imph'><BsCaretRightFill/>    Note</h2>
  <ul>
  
  <li className='simple imp important'>Never skip the end tag (/)</li>
  
  </ul>
</div>


<hr/>



  
   

  
</div>
</div>








 </div>


















    </>
  )
}
