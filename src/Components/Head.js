import React from "react";
import { Link } from "react-router-dom";
const Head = () =>{
    return(
        <div>
            <Link className="button" to="/">Home</Link>
            <Link className="button" to="/student/list">Student List</Link>
            {/* <Link to="/student/list">Student list</Link> */}
            <Link className="button" to="/contact">Contact</Link>
        </div>
    )
}
export default Head; 