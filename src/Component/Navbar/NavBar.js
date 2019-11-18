import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

class NavBar extends React.Component{
  constructor(){
    super()
  }


  render(){
    return(
      <ul className="menu">
        {/* <li><Link to="/">Home</Link></li> */}
        <li><Link to="/">Nantes</Link></li>
        <li><Link to="/damgan">Damgan</Link></li>  
        <li><Link to="/cityChoose">City Choose</Link></li>
      </ul>
    )
  }
}
export default NavBar;