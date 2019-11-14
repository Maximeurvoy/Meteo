import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
  constructor(){
    super()
  }


  render(){
    return(
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/nantes">Nantes</Link></li>
        <li><Link to="/damgan">Damgan</Link></li>  
        <li><Link to="/cityChoose">City Choose</Link></li>
        <li><Link to="/fiveDay">Five day</Link></li>


      </ul>
    )
  }
}
export default NavBar;