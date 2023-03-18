import React from "react";
function Profilcomp (props ){
   
return(
    <div >
<h1>{props.fullName}</h1>
<h1>{props.profession}</h1>
<div>{props.children}</div>
<button onClick={props.handleAlert}>click me</button>
    </div>
    
    
);
}
export default Profilcomp ;

  
