import React, { Component } from 'react';
import paises from  '../json/paises.json';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

class Paises extends  Component {

    constructor() {
        super();
        this.state = {
          paises : paises
        }
      }

    render() {

        //const  infoPais = ({match:{params:{name}}}) => (
        //    <Fragment>
         //       {name !== 'BR' ? <Redirect to="/" /> : null }
         //       <p>Hellooooo......</p>
         //   </Fragment>
       // );


        var listaPaises = this.state.paises; 
        console.log(listaPaises) 
        const listadoPaises = listaPaises.paises.map(p => {
            return (
                <div className="col-md-4">
                    <div className="card mt-4">
                        <div className="card-header">
                            <Link to="/paises">{p.Pais}</Link>
                        </div>
                        <div className="card-body">
                            <img src={process.env.PUBLIC_URL + '/images/flags/' + p.Codpais + '.png'} />
                        </div>
                    </div>
                </div>
            )
        })

    return(
            <div className="container">
                <div className="row mt-4">
                    { listadoPaises }
                </div>
            </div>
        )
    }
}

export default Paises;