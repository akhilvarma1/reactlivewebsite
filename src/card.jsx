import React from  "react";
function Cards(props){
    console.log(props);
    return(
        <>
       <div className="card">
           <img src={props.imgsrc} alt="awesomeapp" />
           <div className="container">
           <h3 style={{textAlign:"center"}}>{props.sname}</h3>
           <p  style={{textAlign:"center"}}>{props.title}</p>
           <div style={{textAlign:"center"}}>
           <a href={props.link}>
               <button >watch Now</button>
           </a>
           </div>
            </div>
       </div>
    </>
    );
}

export default Cards;