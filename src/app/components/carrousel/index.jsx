 
"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import   "../../page.css";

export default class CarouselComponent extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 5000,
        };

        return (
            <div >
                <Slider {...settings}>
                    <div className={"slideContainer"}>
                        <h1 className={"title"}>El sabor del Horno</h1>
                        <h3 className={"subtitle"}>Siempre acompañando cada porción</h3>
                        <Image
                            src={require('../../assets/Foods/Pizzas/1.jpg')}
                            alt="First slide"
                            style={
                                {
                                    objectFit: "cover",
                                    width: "100%",
                                    height: "400px",
                                    objectPosition: "top",
                                }
                            }
                        />
                    </div>
                   <div >
                        <Image
                            src={require('../../assets/Foods/Pizzas/2.jpg')}
                            alt="Second slide"
                            style={
                                {
                                    objectFit: "cover",
                                    width: "100%",
                                    height: "400px",
                                }
                            }
                        />
                    </div> 
                </Slider>

                
            </div>
        );
    }
}
