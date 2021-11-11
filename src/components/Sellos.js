import React, { useEffect, useState } from "react"
import { coleccion } from "../json/MCMLite.json"

function useSellos() {
    const [sellos, setSellos] = useState([])
    useEffect(()=> {
        fetch("json/MCMLite.json")
        .then(response => response.json())
        .then(datos => {
            setSellos(datos)
        })
    }, [])

    return sellos
}


export default function Sellos(){

    const sellos = coleccion;
 
    
    return (
        <div className="container mt-5" align="center">
        <h4>Listar sellos</h4>
      
        <div className="col-md-12">
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">MOTIVO</th>
                        <th scope="col">Código ISO</th>
                        <th scope="col">PAÍS</th>
                        <th scope="col">AÑO EMISIÓN</th>
                        <th scope="col">TEMÁTICA</th>
                        <th scope="col">ESTATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {sellos.map(item => (
                        <tr key={item.Id}>
                            <td>{item.Id}</td>
                            <td>{item.Motivo}</td>
                            <td>{item.Codpais}</td>
                            <td>{item.Pais}</td>
                            <td>{item.Anho}</td>
                            <td>{item.Tmc}</td>
                            <td>{item.Estatus}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    )

}