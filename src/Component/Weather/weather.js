import React, {Fragment} from 'react';
import axios from 'axios';
import './Weather.css'
import moment from 'moment';


class Weather extends React.Component{
  constructor(props){
    super(props)
    // var date= this.getTimeString();
    
    this.state={
      lon:'',
      lat:'',
      tempMax:0,
      tempMin:0,
      humidity:0,
      name:'unknow',
      icon:'',
      iconDescription:'noneYet',
      wind:'Houhouu, Wooov, Vouh, Wouuuh',
      windDirection:0,
      date:0,
      // time:date
    }
    // this.APIKey ='2c89daddf53c8549f9623b9b78cfb1b3' temporairement bloqué
    this.APIKey ='17706518769a23ef96bfa77bd136ac55'
  }


  addAxios=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&units=metric&lon=${this.props.lon}&APPID=${this.APIKey}`)
    .then((result)=>{
      console.log(result)
      this.setState({
        tempMax:result.data.main.temp_max,
        tempMin:result.data.main.temp_min,
        humidity:result.data.main.humidity,
        name:result.data.name,
        icon:result.data.weather[0].icon,
        iconDescription:result.data.weather[0].description,
        wind:result.data.wind.speed,
        windDirection:result.data.wind.deg,
        date:result.data.dt,
      })
    })
  }




componentDidMount=()=>{
  // navigator.geolocation.getCurrentPosition((pos)=>{
    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&units=metric&lon=${this.props.lon}&APPID=${this.APIKey}`)
    .then((result)=>{
      console.log(result)
      console.log(result.data.dt)
      this.setState({
        tempMax:result.data.main.temp_max,
        tempMin:result.data.main.temp_min,
        humidity:result.data.main.humidity,
        name:result.data.name,
        icon:result.data.weather[0].icon,
        iconDescription:result.data.weather[0].description,
        wind:result.data.wind.speed,
        windDirection:result.data.wind.deg,
        date:result.data.dt,
        
      })
    })
    const _this = this;
    this.timer = 
    setInterval(function(){
      var date = _this.getTimeString();
      _this.setState({
        time: date
      })
    },1000)
}

getTimeString() {
  const date = new Date(Date.now()).toLocaleTimeString();
  return date;
  }

componentWillUnmount() {
    clearInterval(this.timer);
}

whatTime=()=>{
  let date = new Date()
    return(date.toLocaleTimeString())

    
}
  
dayoftheday=()=>{
  let date = this.state.date
  date = new Date
  console.log(date)
}

testMoment=()=>{
  let testdate= this.state.date
  let s= testdate.toLocaleString()
  console.log(s)
  // Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(testdate*1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
return (formattedTime)
}
  
  render(){
    return(
      <div className='backgroundDay'>
        {/* <h1 className='cityName'>{this.state.name}</h1> */}
          <p className='hourData'> relevé de {this.testMoment()}</p>
          <h2 className='time'>{this.whatTime()}</h2>
              <img className='iconOfTheDay' src={`https://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt={this.state.iconDescription}/>
        <div className='weatherInformation'>
          <div className='weatherInformationIcon'>
            <div className="imageVent">
              {/* <img src={`${process.env.PUBLIC_URL} /north.png`} style={{width:`90px`,height:'90px',position:'absolute'} }alt="wind arrow"/> */}
              <img classname='windDirection' src={`${process.env.PUBLIC_URL} /white-arrow.png`} style={{transform:`rotate(${this.state.windDirection}deg)`,width:`50px`,height:'50px'} }alt="wind arrow"/>
              <p className='north'>N</p>
              <p className='wind'>wind</p>
              <p> {Math.round((this.state.wind*3.6)*100)/100} km/h</p>

            </div>        
          </div>
          <div className='weatherInformationNumber'>
            <p className='temperature'>max {`${this.state.tempMax}°C`}</p>
            <p className='temperature'>min {`${this.state.tempMin}°C`}</p>

            <p className='humidity'>Humidity <br/>{this.state.humidity} %</p>
          </div>      
        </div>  
      </div>
    )
  }
}

export default Weather;