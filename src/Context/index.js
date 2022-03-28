import React from "react";

const Context = React.createContext();

function Provider(props){

    const [openModal, setOpenModal] = React.useState(false);
    const [modalMessage, modalFollowing] = React.useState(1);


    return (
        <Context.Provider value={{
            openModal,
            setOpenModal,
            modalMessage,
            modalFollowing,
        }}>
            {props.children}
        </Context.Provider>
    );

}

export { Context, Provider};