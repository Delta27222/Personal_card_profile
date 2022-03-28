import React from "react";
import './Feed_Profile.css';

function Feed_Profile(){
    return(
        <div className="info_profile">
            <h3 className="name">Angel Hernandez</h3>
            <h6 className="city">Caracas</h6>
            <p className="aboutMe">
                User interface designer and <br /> front-end developer
            </p>
        </div>
    );
}

export { Feed_Profile };