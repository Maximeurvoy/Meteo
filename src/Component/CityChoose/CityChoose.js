import React, {Fragment, useState, useEffect} from 'react';
// import Weather from '../Weather/weather';
import WeatherByName from '../WeatherByName/WeatherByName';
import axios from 'axios';

let CityChoose=()=>{
    
  const [name, setName] = useState('Nantes')
  const [inputName,setInputName] = useState('')
  let[temp,setTemp]= useState('result.data.main.temp')

  const APIKey ='17706518769a23ef96bfa77bd136ac55'

  
useEffect(()=>{
  
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&&APPID=${APIKey}`)
    .then((result)=>{
      console.log(result)
      
        setTemp (result.data.main.temp)
        // humidity:result.data.main.humidity,
        // name:result.data.name,
        // icon:result.data.weather[0].icon,
        // iconDescription:result.data.weather[0].description,
        // wind:result.data.wind.speed,
        // windDirection:result.data.wind.deg,
        // date:result.data.date
      
    })
  })



  let newCityWeatherByName=()=>{
    setName(inputName)
    console.log(name)
  }

  let handleChangeCityName=(event)=>{
    setInputName(event.target.value);
    
    
  }
   

  return(
    <>
      <input type='text' id='name' name='cityName' value={inputName} onChange={handleChangeCityName}></input>
      <button onClick ={newCityWeatherByName}>New city by name</button>
      <h2>{name}</h2>
        <p>{`${temp}°C`}</p>
        {/* <p>Humidity {this.state.humidity} %</p>
        <img src={`https://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt={this.state.iconDescription}/>
        <p>wind Speed {this.state.wind*3.6} km/h</p>
        <div className="imageVent">
          <img src={`${process.env.PUBLIC_URL} /north.png`} style={{width:`90px`,height:'90px',position:'absolute'} }alt="wind arrow"/>
          <img src={`${process.env.PUBLIC_URL} /windDirection.png`} style={{transform:`rotate(${this.state.windDirection}deg)`,width:`90px`,height:'90px',position:'absolute'} }alt="wind arrow"/>
        </div> */} */}
      {/* {/* <WeatherByName name={name}/> */}
    </>
  )
}

export default CityChoose;