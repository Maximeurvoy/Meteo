import React from 'react';
import Weather from '../Weather/weather';

class Damgan extends React.Component{
  constructor(){
    super()

  }
  render(){
    return(
      <Weather lat="47.5167" lon="-2.5833"/>
    )
  }
}

export default Damgan;