import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Damgan from '../Damgan/Damgan';
import Nantes from '../Nantes/Nantes';
import CityChoose from '../CityChoose/CityChoose';
import FiveDay from '../FiveDay/FiveDay';


class Router extends React.Component{
  constructor(){
        super()
    }
  render(){
    return(
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/damgan" component={Damgan}/>
        <Route path="/nantes" component={Nantes}/>
        {/* <Route path="/cityChoose" component={CityChoose}/> */}
        <Route path='/fiveDay' component={FiveDay}/>
      </Switch>
    )
    }
}

export default Router;