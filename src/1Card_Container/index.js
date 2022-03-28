import React from "react";
import './Card_Container.css';
import { Spam_Pro } from '../2Spam_Pro/index.js';
import { Img_Profile } from '../3Img_Profile/index.js';
import { Feed_Profile } from '../4Feed_Profile/index.js';
import { Container_Buttons } from '../5Container_Buttons/index.js';
import { Skills } from '../6Skills/index.js';




function Card_Container(props) {
    return(
        <div className="card_container">
            <Spam_Pro />
            <Img_Profile />
            <Feed_Profile />
            <Container_Buttons
                setOpenModal={props.setOpenModal}
                modalFollowing={props.modalFollowing}
            />
            <Skills />
        </div>
    );
}

export { Card_Container };