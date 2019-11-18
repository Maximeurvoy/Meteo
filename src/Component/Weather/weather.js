import React, {Fragment} from 'react';
import axios from 'axios';
import './Weather.css'


class Weather extends React.Component{
  constructor(props){
    super(props)
    // var date= this.getTimeString();
    
    this.state={
      lon:'',
      lat:'',
      temp:0,
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
        temp:result.data.main.temp,
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
        temp:result.data.main.temp,
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



  render(){
    return(
      <Fragment>
        <h1 className='cityName'>{this.state.name}</h1>
        <p> relevé de {this.state.date.toString()}{this.dayoftheday()}</p>
          <h2 className='time'>{this.whatTime()}</h2>
        <div className='weatherInformation'>
          <div className='weatherInformationIcon'>
            <div>
              <img className='iconOfTheDay' src={`https://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt={this.state.iconDescription}/>
            </div>
            <div className="imageVent">
              <img src={`${process.env.PUBLIC_URL} /north.png`} style={{width:`90px`,height:'90px',position:'absolute'} }alt="wind arrow"/>
              <img src={`${process.env.PUBLIC_URL} /white-arrow.png`} style={{transform:`rotate(${this.state.windDirection}deg)`,width:`90px`,height:'90px',position:'absolute', } }alt="wind arrow"/>
            </div>        
          </div>
          <div className='weatherInformationNumber'>
          <p className='temperature'>{`${this.state.temp}°C`}</p>
          <p className='humidity'>Humidity {this.state.humidity} %</p>
          <p className='wind'>wind Speed {this.state.wind*3.6} km/h</p>
          </div>      
        </div>  
      </Fragment>
    )
  }
}

export default Weather;