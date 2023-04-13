import React, {useRef, useEffect} from "react";
import './Home1.css';


export default function Home1({data}) {

    let show = useRef();

    useEffect(() => {
        let a = true;

         if(a) {
            console.log(data)
         }

         return () => {
            a = false;
         }
    })

    function showAllTheImage(e) {
        // window.location.assign('http://localhost:8080/')
        show.current.style.transform = `translate(0)`

    }


    function canCle() {
show.current.style.transform = `translate(-2000px)`
        
    }


    return (
        <>
<div className="homecontainer">

<div className="h1">
<h1 className="h">Your profilepictures</h1>
<button className="btn btn-dark" onClick={showAllTheImage}>Watch</button>

</div>


<div className="h1">

<h1 className="h">Your coverspictures</h1>
<button className="btn btn-dark">Watch</button>
    
</div>




<div className="h1">
    <h1 className="h">Your friends</h1>
<button className="btn btn-dark">Watch</button>

</div>




<div className="h1">
    <h1 className="h">Your friends</h1>
<button className="btn btn-dark">Watch</button>

</div>




<div className="h1">
    <h1 className="h">Your friends</h1>
<button className="btn btn-dark">Watch</button>

</div>




<div className="h1">
    <h1 className="h">Your friends</h1>
<button className="btn btn-dark">Watch</button>

</div>



<div className="h1">
    <h1 className="h">Your friends</h1>
<button className="btn btn-dark">Watch</button>

</div>




<div className="h1">
    <h1 className="h">Your friends</h1>
<button className="btn btn-dark">Watch</button>

</div>






</div>


<div className="verybig bg-dark" ref={show}>
    <img src={'/images/b.jpg'} alt='asdfas' height={400} width={400}/>
    <h1 className="verybigh1">I am very big</h1>
    <button onClick={canCle}>Cancle</button>
</div>



        
        </>
    )
}