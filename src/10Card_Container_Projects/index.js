import React from "react";
import './Card_Container_Projects.css';

import { Spam_P } from "../2Spam"
import { Button_Back } from "../9Button_Back"
import { List_scrool } from "../11list_Scrool"
import { Project } from "../12ItemProject";

function Card_Container_Projects(props){
    return(
        <div className="card_container_projects">
            <Spam_P
                text='My Projects'
            />
            <Button_Back
                setOpenModal={ props.setOpenModal}
            />
            <List_scrool />
        </div>
    );
}

export { Card_Container_Projects };