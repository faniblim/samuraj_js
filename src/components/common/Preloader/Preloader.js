import React from "react";
import preloader from "../../../assets/images/preloader6.gif";
//import preloader from "../../../assets/images/loading-animation.gif";

let Preloader = (props) => {
return  <div style={ {backgroundColor: 'white'}}>
      <img src={preloader} /> 
      </div>
}

export default Preloader;