import React from "react";
import Images from "../images/images.jpg"

export default function Hero() {
    return (
        <section className="hero">
            <img src={Images} className="hero--img" alt="HeroImage" />
            <h1 className="hero--header">
                Online Experiences
            </h1>
            <p className="hero--text">
                Join unique interactive activities led by
                one-of-a-kind hosts-all without leaving
                home.
            </p>
        </section>
    )
}