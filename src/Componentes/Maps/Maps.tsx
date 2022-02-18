import React from 'react'
import {Link} from "react-router-dom"
import  {  GoogleMap ,  useJsApiLoader  }  from  '@react-google-maps/api' 
import "./Map.css";

export interface MapPageProps {}

const Maps = () => {
    const  { isLoaded }  =  useJsApiLoader ( { 
        id : "google-map-script" , 
        googleMapsApiKey : 
        "AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik" 
      } );
      const position = {
        lat:-34.59114561350878, 
        lng:-58.44789031698568,
      };

  return (
    <div className="map">
        {isLoaded ? ( 
      <GoogleMap 
      mapContainerStyle = { {width:"100%", height: "100%"} } 
      center = {position} 
      zoom = { 15 } 
      >
      </GoogleMap> 

    ) : (
      <>
      </> 
      )}
    </div>
  );  
}
  
export default Maps;


