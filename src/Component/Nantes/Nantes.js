import React, {Fragment} from 'react';
import axios from 'axios';
import './Nantes.css'
import Weather from '../Weather/weather';
import FiveDay from '../FiveDay/FiveDay';


class Nantes extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div className='nantes'>
        <div className='backgroundDay'>
        <Weather  lat="47.2173" lon="-1.5534"/>
        </div>
        <div className='backgroundFiveDay'>
        <FiveDay className='fiveday' lat="47.2173" lon="-1.5534"/>
        </div>
      </div>
    )
  } 
}

export default Nantes;