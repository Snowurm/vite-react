import Hero from "../objects/Hero";
import Jumbotron from "../objects/Jumbotron";
import Carousel from "../objects/carousel/Carousel";
import React from "react";

const Home = (): JSX.Element => {
    return (
        <>
            {/* <Carousel /> */}
            <Hero />
            <Jumbotron />
        </>
    );
};

export default Home;
