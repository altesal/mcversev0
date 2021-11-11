import React, { Component } from 'react';
import {coleccion_AE} from '../json/MCMLite_AE.json';
import {coleccion_AL} from '../json/MCMLite_AL.json';
import {coleccion_AR} from '../json/MCMLite_AR.json';
import {coleccion_AT} from '../json/MCMLite_AT.json';
import {coleccion_AU} from '../json/MCMLite_AU.json';
import {coleccion_BE} from '../json/MCMLite_BE.json';
import {coleccion_BO} from '../json/MCMLite_BO.json';
import {coleccion_BR} from '../json/MCMLite_BR.json';
import {coleccion_CA} from '../json/MCMLite_CA.json';
import {coleccion_CN} from '../json/MCMLite_CN.json';
import {coleccion_CU} from '../json/MCMLite_CU.json';

class SellosPorPais extends Component {

    render() {

        const sellos = coleccion_BR;
 
    
        return <div>Listar sellos por paises...importando files json...</div>
    
    }
}

export default SellosPorPais;