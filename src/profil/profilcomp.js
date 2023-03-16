import React from "react";
function Profilcomp (props){
return(
    <div style={{textAlign:'center' , color:'blue' ,fontFamily:'cursive', fontSize:'30px'}}>
<p>
    Hello , </p>
  <p>  I'm {props.name},i'm {props.age} years old ,my profession is a {props.profession} . 

</p>


    </div>
    
)
}
export default Profilcomp ;

  
