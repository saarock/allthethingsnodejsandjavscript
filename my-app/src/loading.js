import { BsHandThumbsUp,  BsHandThumbsDown } from "react-icons/bs";
// import './lookit.css'


export default function Loading() {
    return (
        <>
        
        

<div className="uploadphotostosee">




      
<div className='photossee'>

<div className='whoupload'>
<div className='who'>

<img src={'/images/b.jpg' } alt='Loading' width="150px" height="150px" className='who ' ></img>
<h3 className='namewho b'>{ "Loading..."}</h3>
<p>Loading...</p>
</div>



</div>
<img src={'/images/b.jpg' }  width="800px" height="500px"></img>

<div className='likeicons'>

<span className='like'> <BsHandThumbsUp className='like' /></span>

<div className='coombtn'>
<div className='allshowcomandlike'>
<button className='seeLikes'>See who likes</button>
<button className='seeComments'>Show Comments</button>
</div>








<div className='bigdiv' >
<div className='unav'>
<h3 className='pnav'><span className='cName'>Aayuwsh</span> <img src='/images/a.jpg' alt='me' width="50px" height="50px" 
 className='himg'></img>Wow very nice</h3>

</div>




</div>















<div className='showcomments'>
<input type='text' className='textC' placeholder='Comments...'></input>
<button className='postComment' >post</button>

</div>
</div>
<span className='unlike'><BsHandThumbsDown className='unlike' />21</span>  
</div>

</div>
















  
  
  









  
  


















</div>



        
        </>
    )
}