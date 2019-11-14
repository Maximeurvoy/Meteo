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
      <Fragment>
        <Weather lat="47.2173" lon="-1.5534"/>
        <FiveDay lat="47.2173" lon="-1.5534"/>
      </Fragment>
    )
  } 
}

export default Nantes;