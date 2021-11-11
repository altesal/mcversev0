import React, { Component } from 'react';
import { NavLink, withRouter, Link} from 'react-router-dom';

class Navigation extends Component {

  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }


    render() {
        return (
          <nav className="navbar">
            <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/tematicas">Temáticas</Link>
                </li>
                <li>
                  <Link to="/paises">Países</Link>
                </li>
              </ul>
          </nav>        )
    }
}

export default Navigation;