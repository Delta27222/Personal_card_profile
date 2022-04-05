import React from "react";
import './Button_Back.css';

function Button_Back(props){
    const onClickButtonBack = () => {
        props.setOpenModal(false);
    }
    return(
        <img
        src="https://img.icons8.com/metro/26/000000/back.png"
        className="back"
        onClick={onClickButtonBack}
        title="Back"
        />
    );
}

export { Button_Back };