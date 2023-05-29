import React from "react";
import { HeroSection } from "../../Components/Hero Section/HeroSection";
import { WhyChooseUs } from "../../Components/Why Choose Use/Whychooseus";
import { AboutHome } from "../../Components/HomeAbout/Homeabout";
import { NewListing } from "../../Components/New Listing/NewListing";
import { HousesDetails } from "../../Components/Context/HouseContext";
export const Home = () => {
    return(
        <div className="bg-white ">
    <HeroSection/>
    <WhyChooseUs/>
    <AboutHome/>
    <NewListing/>
        </div>
    )
}