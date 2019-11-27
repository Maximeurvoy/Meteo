import React, {Fragment} from 'react';
import axios from 'axios';
import { tsNamespaceExportDeclaration } from '@babel/types';
import './FiveDay.css';

class FiveDay extends React.Component{
  constructor(props){
    super(props)
    this.state={
      numberDay:5,
      lat:this.props.lat,
      lon:"",
      temp:[],
      humidity:0,
      name:'Nantes',
      icon:'',
      iconDescription:'noneYet',
      wind:'Houhouu, Wooov, Vouh, Wouuuh',
      windDirection:0,
      futurData:[]
    }
    this.APIKey ='2c89daddf53c8549f9623b9b78cfb1b3'
  }
  
  
  componentDidMount=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.props.lat}&units=metric&lon=${this.props.lon}&units=metric&APPID=${this.APIKey}`)
    .then((result)=>{
          console.log(result.data.list)
          this.setState({
            futurData: result.data.list 
        })
    })
  }
  

  futurWeather=()=>{
    return this.state.futurData.filter((item,index)=>{
      if (index ===7 || index === 15|| index ===23 || index === 31 || index ===  39 ){console.log(item) ;return item 
    }})
    .map((item,index)=>{
      console.log(item.main.temp)
      console.log(item.weather[0].main)
      console.log(item.dt_txt)
      let day = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
      return(
        <div className='fiveDayTest'>
          <p className='day'>{day[(new Date (item.dt_txt)).getDay()]}</p>
          <p className='temperatureFutur'>{item.main.temp}°C </p>
          {/* <p>{item.weather[0].main} </p> */}
          {/* <p>{item.weather[0].description} </p> */}
          <img className='icon' src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description}/>
          <p className='humidity'>Hum {item.main.humidity} %</p>
          <p className='wind'>Wind<br/>{Math.round((item.wind.speed*3.6)*100)/100}<br/>km/h</p>
        </div>
      )
      })
    }
    
 
  render(){
    return(      
        <div className="flexRow  ">{this.futurWeather()}</div>
      
    )
  }
}
    


export default FiveDay