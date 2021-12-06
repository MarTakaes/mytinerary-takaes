import React from "react";
import Footer from "../Components/Footer";
import HeaderHome from "../Components/Header";
import HeroCity from "../Components/heroCity";

import RenderCities from "../Components/RenderCities";

export default class Cities extends React.Component {
  render() {
    return (
      <>
        <HeaderHome/>
        <HeroCity/>
        <RenderCities/>
        <Footer/>
      </>
    );
  }
}