import { Button, ImageListItem, Typography } from "@material-ui/core";
import React from "react";

import useStyles from "./styles";

const CategoriesItem = ({ item: { img, title }, ...rest }) => {
    const classes = useStyles();
    return (
        <ImageListItem cols={1} {...rest} className={classes.imgListItem}>
            <div className={classes.imgContainer}>
                <img src={img} alt={title} className={classes.img} />
                <div className={classes.info}>
                    <Typography variant="h2" className={classes.title}>
                        {title}
                    </Typography>
                    <Button variant="contained" className={classes.btn}>
                        shop now
                    </Button>
                </div>
            </div>
        </ImageListItem>
    );
};

export default CategoriesItem;
