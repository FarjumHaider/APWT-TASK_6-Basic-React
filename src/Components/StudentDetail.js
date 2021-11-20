import React from "react";
import { useParams } from "react-router-dom";
import "../index.css";
const StudentDetail = () => {
    const {name} = useParams();
    const {id} = useParams();
    const {cgpa} = useParams();
    return(
        <div className="column">
            <div className="card">
                <p>Name: {name}</p>
                <p>ID: {id}</p>
                <p>CGPA: {cgpa}</p>
            </div>

        </div>

    )
    
}

export default StudentDetail;
