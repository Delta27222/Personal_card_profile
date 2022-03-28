import React from "react";
import './Container_Buttons.css';

function Container_Buttons(props){
    const onClickButtonProjects = () => {
        props.setOpenModal(prevState => !prevState);
        props.modalFollowing(1);
    }
    const onClickButtonFollowing = () => {
        props.setOpenModal(prevState => !prevState);
        props.modalFollowing(2);
    }
    return(
        <div className="button_container">
            <button
                className="button"
                onClick={onClickButtonProjects}
            >Projects</button>
            <button
                className="button_Ghost"
                onClick={onClickButtonFollowing}
            >Following</button>
        </div>
    );
}

export { Container_Buttons };