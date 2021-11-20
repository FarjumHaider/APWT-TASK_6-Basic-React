import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Student = (props) =>{
    return(
        <div className="column">
            <div className="card">
                <Link  to={"/student/details/"+props.name+"/"+props.id+"/"+props.cgpa}><p>Name: {props.name} </p></Link>
                <p> ID: {props.id}</p>
                <p> CGPA: {props.cgpa}</p>
            </div>
        </div>


    )
}
export default Student; 