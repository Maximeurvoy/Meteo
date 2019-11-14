import React, {Fragment, useState, useEffect} from 'react';
import Weather from '../Weather/weather';

let CityChoose=()=>{
    
     const [lat,setLat]= useState(2.3)
     const [lon, setLon] = useState (48)
     const [inputLat, setInputLat] =useState(0)
     const [inputLon, setInputLon] =useState(0)

  
     // lat:48.866667
  // lon:2.333333,

  let handleChangeLat=(event)=>{
    setInputLat(event.target.value);
  }

  let handleChangeLon=(event)=>{
    setInputLon(event.target.value);
  }



  let newCityWeather=()=>{
    setLat(inputLat)
    setLon(inputLon)

    console.log('toto')
    console.log(lat)
    console.log(lon)
  }

    return(
      <>
        <label for='longitude'>Longitude</label>
        <input type='text' id='longitude' name='longitude' value={inputLon} onChange={handleChangeLon}></input>
        <label for='latitude'>latitude</label>
        <input type='text' id='latitude' name='latitude' value={inputLat} onChange={handleChangeLat}></input>
        <p>la lat {lat}</p>
        <p>la lon {lon}</p>
        <button onClick ={newCityWeather}>New city</button>
        <Weather lat={lat} lon={lon}/>
      </>
    )
  }

// export default CityChoose;