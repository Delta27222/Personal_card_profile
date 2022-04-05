import React from "react";
import './Project.css';

function Project(props){
    return(
        <React.Fragment>
            <a href={props.link} target="_blank" className="a">
                <li className="itemList">
                    <div className="container_project">
                            <div className="container_info">
                                <h3 className="project_name"><a href={props.link}>{props.name}</a></h3>
                                <p className="project_text">{props.text}</p>
                                <h6 className="project_date">{props.date}</h6>
                            </div>
                            <img className="project_img" src={props.img} alt="tech" title={props.name_Tech}/>
                    </div>
                </li>
            </a>
        </React.Fragment>
    );
}

export { Project };