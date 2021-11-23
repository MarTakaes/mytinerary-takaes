import React from "react";
import Carrousel from "../Components/Carousell";
import Footermain from "../Components/Footer";
import HeaderHome from "../Components/Header";
import Hero from "../Components/Hero";

export default class Home extends React.Component{

    render (){
        return (
            <>
                <HeaderHome />
                <Hero/>
                <Carrousel/>
                <Footermain/>
            </>
        )
    }
}