import React from "react";
import Slider from "react-slick";

const ScrollList = ({ children, slidesNumber, rest }) => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: Math.min(slidesNumber, 2.25),
        slidesToScroll: 1,
        centerMode: true,
        draggable: false,
        focusOnSelect: true,
        swipeToSlide: true,
        rows: 1,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: Math.min(slidesNumber, 1.25),
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
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
