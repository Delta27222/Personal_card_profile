import React from "react";
import './Card_Container_Projects.css';


import { Project } from "../ItemProject";

function Card_Container_Projects(props){
    const onClickButtonBack = () => {
        props.setOpenModal(false);
    }
    return(
        <div className="card_container_projects">
            <span className="pro">My Projects</span>
            <img
                src="https://img.icons8.com/metro/26/000000/back.png"
                className="back"
                onClick={onClickButtonBack}
                title="Back"
            />
            <ul>
                <div className="div_scrool">
                    <Project
                        name='TodoApp'
                        text='Aplicacion para guardar todas las actividades que tengas por realizar. Todo esto usando React JS.'
                        link='https://delta27222.github.io/React_Todo_App/'
                        img='https://img.icons8.com/color/344/react-native.png'
                        date='03-27-2022'
                        name_Tech='React Js'
                    />
                    <Project
                        name='WheatherFast'
                        text='Aplicación para ver el clima de las ciudades mas importantes del mundo, usando la API de OpenWeather.'
                        link='https://delta27222.github.io/Weather_API/'
                        img='https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png'
                        date='02-10-2022'
                        name_Tech='OpenWeather'
                    />
                    <Project
                        name='Rick&Morty'
                        text='Aprendiendo a traer datos de una API, en este caso de la de Rick and Morty.'
                        link='https://delta27222.github.io/RickAndMorty_API/'
                        img='https://img.icons8.com/plasticine/452/morty-smith.png'
                        date='01-26-2022'
                        name_Tech='Rick&Morty API'
                    />
                    <Project
                        name='Fox 🦊?'
                        text='Aprendiendo a traer datos de una API (Imagenes), en este caso de la de zorros. También aplicando LazyLoading'
                        link='https://delta27222.github.io/What_Does_The_Fox_Say_API/'
                        img='https://img.icons8.com/color/100/000000/fox.png'
                        date='01-22-2022'
                        name_Tech='Zorros API'
                    />
                    <Project
                        name='AguacateShop'
                        text='Aprendiendo a traer datos de una API, en este caso de la de aguacates.'
                        link='https://delta27222.github.io/AguacateShop_API/'
                        img='https://img.icons8.com/cotton/344/avocado--v1.png'
                        date='03-27-2022'
                        name_Tech='Aguacates API'
                    />
                </div>
            </ul>
        </div>
    );
}

export { Card_Container_Projects };