import React, { Component } from "react";

import Student from './Student';

function StudentList(){
    return(
        <div>
            <Student name="Farjum" id="18-38360-2" cgpa="2.50"/>
            <Student name="Haider" id="19-38435-1" cgpa="3.50"/>
            <Student name="Tamim" id="20-38360-3" cgpa="3.70"/>
        </div>

    )
}

export default StudentList;