import React from "react";
import './Skills.css';

function Skills(){
    return(
        <div className="skills_container">
            <h6>Skills</h6>
            <ul className="list_skills">
                <li>Django</li>
                <li>Front End Development</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        </div>
    );
}

export { Skills };