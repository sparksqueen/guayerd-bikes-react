import React from 'react'
import "./Map.css";

const Maps = () => {
  return (
    <div>
    
    <iframe title="Maps" className="iframe" src="https://maps.google.com/?ll=-34.59090788410966,-58.447912417588185&z=14&t=m&output=embed"
    width="600" 
    height="450" 
    allow="fullscreen"  
    loading="lazy">
    </iframe>  

    </div>
  )
}

export default Maps

