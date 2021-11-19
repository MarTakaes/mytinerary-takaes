import React from "react";
import HeaderHome from "../Components/Header";
import Hero from "../Components/Hero";

export default class Home extends React.Component{

    render (){
        return (
            <>
                <HeaderHome />
                <Hero/>
            </>
        )
    }
}