import { Button, Typography } from "@material-ui/core";
import React from "react";
import LazyLoad from "react-lazyload";

import useStyles from "./styles";

const SliderItem = ({ item }) => {
    const { id, img, title, desc, bg } = item;
    const classes = useStyles({ bg });

    return (
        <div className={classes.wrapper} key={id}>
            <div className={classes.imgContainer}>
                <LazyLoad height={'100vh'} once>
                    <img src={img} alt="sliderImg" className={classes.img} />
                </LazyLoad>

            </div>
            <div className={classes.desContainer}>
                <Typography component="h2" variant="h1" className={classes.title}>
                    {title}
                </Typography>
                <Typography variant="body1" className={classes.desc}>
                    {desc}
                </Typography>
                <Button variant="outlined" className={classes.btn}>
                    SHOW NOW
                </Button>
            </div>
        </div>
    );
};

export default SliderItem;
