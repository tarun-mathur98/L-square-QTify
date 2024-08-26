import React from "react";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./Hero Section/HeroSection";
// import "./HomePage.css";
import heroLogo from "../assets/headphone.png";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        text1="100 Thousand Songs, ad-free"
        text2="Over thousands podcast episodes"
        url={heroLogo}
      />
    </>
  );
};

export default HomePage;
