import React from "react";
import { HeroSection } from "../../Components/Hero Section/HeroSection";
import { WhyChooseUs } from "../../Components/Why Choose Use/Whychooseus";
import { AboutHome } from "../../Components/HomeAbout/Homeabout";
export const Home = () => {
    return(
        <div className="bg-white ">
    <HeroSection/>
    <WhyChooseUs/>
    <AboutHome/>
        </div>
    )
}