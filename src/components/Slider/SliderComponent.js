// import { Button, Slider, Typography } from '@material-ui/core'
import React from "react";
import Carousel from "react-material-ui-carousel";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import colors from "../../config/colors";
import useStyles from "./styles";
import { sliderItems } from "../../data";
import SliderItem from "./SliderItem";

const SliderComponent = () => {
    const classes = useStyles();
    return (
        <Carousel
            className={classes.carousel}
            indicators={false}
            navButtonsAlwaysVisible={true}
            navButtonsProps={{
                // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    // backgroundColor: 'red',
                    borderRadius: 50,
                    backgroundColor: "transparent",
                    color: colors.dark,
                },
            }}
            NextIcon={<NavigateNextIcon fontSize="large" />} // Change the "inside" of the next button to "next"
            PrevIcon={<NavigateBeforeIcon fontSize="large" />}
        >
            {sliderItems.map((item) => (
                <SliderItem item={item} key={item.id} />
            ))}
        </Carousel>
    );
};

export default SliderComponent;
