import React, { Component } from "react";
import {tematicas} from '../json/tematicas.json';
import {subTematicas} from '../json/subTematicas.json';

class Tematicas extends Component  {

    constructor() {
        super();
        this.state = {
          tematicas : tematicas,
          subTematicas : subTematicas
        }
      }
render(){
    const tmts = this.state.tematicas.map((tematica,i) => {
        return (
          <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{tematica}</h3>
  
              {
                this.state.subTematicas.filter(value => value.Tmc == tematica).map(it => {
                  return (<span className="badge badge-pill badge-danger ml-2" > {it.Subtema} </span>)
                })
              }
            </div>
              <div className="card-body">
                <p>{tematica}</p>
                <p><mark>{tematica}</mark></p>
              </div>
          </div>
          </div>
        )
      })

    return(
        <div className="container">
        <div class="row mt-4">
          { tmts}
        </div>
      </div>
    );
}
}

export default Tematicas