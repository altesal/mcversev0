import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import Home from './components/Home';
import Paises from './components/Paises';
import Tematicas from './components/Tematicas';
import Subtematicas from './components/Subtematicas';
import PageNotFound from './components/PageNotFound';
import {paises} from './json/paises.json';
import {tematicas} from './json/tematicas.json';
import {subTematicas} from './json/subTematicas.json';
import { SellosPorPais } from "./components/SellosPorPais";


class Routes extends Component {

    constructor() {
        super();
        this.state = {
          paises : paises,
          tematicas : tematicas,
          subTematicas : subTematicas
        }
      }
    

    render(){
        return  <Router>
        <div className="App">
          <nav className="navbar navbar-dark bg-dark">
            <ul>
              <li>
              <Link to="/"  className="text-white">Home</Link>
              </li>
              <li>
                <Link to="/tematicas"  className="text-white">Temáticas <span className="badge badge-pill badge-light ml-2">
                    {this.state.tematicas.length}</span></Link>
              </li>
              <li>
                <Link to="/subtematicas"  className="text-white">Subtemáticas <span className="badge badge-pill badge-light ml-2">
                                    {this.state.subTematicas.length}</span></Link>
              </li>
              <li>
                <Link to="/paises"  className="text-white">Países <span className="badge badge-pill badge-light ml-2">
                    {this.state.paises.length}</span></Link>
              </li>
            </ul>
          </nav>
      
       
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tematicas" component={Tematicas} />
            <Route exact path="/subtematicas" component={Subtematicas} />
            <Route exact path="/paises" component={Paises} />
            <Route component={PageNotFound} />
        </Switch>
        
        </div>
      </Router>



    }
}

export default Routes;