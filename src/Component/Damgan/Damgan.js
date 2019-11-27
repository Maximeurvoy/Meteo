import React from 'react';
import Weather from '../Weather/weather';
import FiveDay from '../FiveDay/FiveDay';

class Damgan extends React.Component{
  constructor(){
    super()

  }
  render(){
    return(
      <div className='nantes'>
        <div className='backgroundDay'>
        <Weather lat="47.5167" lon="-2.5833"/>
        </div>
        <div className='backgroundFiveDay'>
        <FiveDay className='fiveday' lat="47.5167" lon="-2.5833"/>
        </div>
      </div>



      
    )
  }
}

export default Damgan;