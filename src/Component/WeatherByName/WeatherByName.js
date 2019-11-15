// import React, {Fragment} from 'react';
// import axios from 'axios';


// class WeatherByName extends React.Component{
//   constructor(props){
//     super(props)
//   this.state={
//     lon:'',
//     lat:'',
//     temp:0,
//     humidity:0,
//     name:'unknow',
//     icon:'',
//     iconDescription:'noneYet',
//     wind:'Houhouu, Wooov, Vouh, Wouuuh',
//     windDirection:0,
//     namecity:'Nantes'
//   }
//    // this.APIKey ='2c89daddf53c8549f9623b9b78cfb1b3' //temporairement bloqué
//    this.APIKey ='17706518769a23ef96bfa77bd136ac55'
//   }

//   addAxios=(props)=>{
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.name}&units=metric&&APPID=${this.APIKey}`)
//     .then((result)=>{
//       console.log(result)
//       this.setState({
//         temp:result.data.main.temp,
//         humidity:result.data.main.humidity,
//         name:result.data.name,
//         icon:result.data.weather[0].icon,
//         iconDescription:result.data.weather[0].description,
//         wind:result.data.wind.speed,
//         windDirection:result.data.wind.deg,
//         date:result.data.date
//       })
//     })
//   }

 

//   componentWillReceiveProps=(props)=>{
//     // this.setState({namecity:props})
//     // console.log(this.state.namecity)
//     this.addAxios(props.name)
//     console.log(props)
//   }

// componentDidMount=()=>{
// this.addAxios()
// }

//   render(){
//     return(
//       <Fragment>
//         <h2>{this.state.name}</h2>
//         <p>{`${this.state.temp}°C`}</p>
//         <p>Humidity {this.state.humidity} %</p>
//         <img src={`https://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt={this.state.iconDescription}/>
//         <p>wind Speed {this.state.wind*3.6} km/h</p>
//         <div className="imageVent">
//           <img src={`${process.env.PUBLIC_URL} /north.png`} style={{width:`90px`,height:'90px',position:'absolute'} }alt="wind arrow"/>
//           <img src={`${process.env.PUBLIC_URL} /windDirection.png`} style={{transform:`rotate(${this.state.windDirection}deg)`,width:`90px`,height:'90px',position:'absolute'} }alt="wind arrow"/>
//         </div>
//         {/* <p>{this.state.windDirection}</p> */}


//       </Fragment>
//     )
//   }
// }

// export default WeatherByName;