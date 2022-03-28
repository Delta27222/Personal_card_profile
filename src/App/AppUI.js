import React from "react";

// Utilities
import { Context } from "../Context";


import { Card_Container } from '../1Card_Container/index.js'
import { Modal } from "../7Modal/index.js";
import { Card_Container_Projects } from "../7Modal/1Card_Container_Projects/index.js";

function AppUI () {
        // Aqui usaremos un nuevo HOOK
        const {
            openModal,
            setOpenModal,
            modalMessage,
            modalFollowing,
        } = React.useContext(Context);

    return(
        <React.Fragment>
            <Card_Container
                setOpenModal={setOpenModal}
                modalFollowing={modalFollowing}
            />

            {/* Aca llamaremos al modal, haciendo uso de un estado que se creo en el CONTEXT */}

            { !!openModal && modalMessage===1 &&(
                <Modal>
                    <Card_Container_Projects
                        setOpenModal={setOpenModal}
                    />
                </Modal>
            )}
            { !!openModal && modalMessage===2 &&(
                <Modal>
                    <h1>Following</h1>
                </Modal>
            )}
        </React.Fragment>
    );
}

export { AppUI };