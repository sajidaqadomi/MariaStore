import React from "react";
import Slider from "react-slick";

const ScrollList = ({ children, rest }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.25,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1.15,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };
    return (
        <Slider {...settings} {...rest}>
            {children}
        </Slider>
    );
};

export default ScrollList;
