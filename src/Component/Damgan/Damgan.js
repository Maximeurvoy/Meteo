import React from 'react';
import Weather from '../Weather/weather';
import FiveDay from '../FiveDay/FiveDay';

class Damgan extends React.Component{
  constructor(){
    super()

  }
  render(){
    return(
      <div className='weather'>
        <h1>Damgan</h1>
        <div className='nantes'>
          <Weather lat="47.5167" lon="-2.5833"/>
          <FiveDay lat="47.5167" lon="-2.5833"/>
        </div>
      </div>
    )
  }
}

export default Damgan;