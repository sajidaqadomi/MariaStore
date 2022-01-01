import { Button, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const CategoriesItem = ({ item: { img, title, cat }, ...rest }) => {
    const classes = useStyles();
    return (
        <div className={classes.imgListItem} {...rest} >
            <div className={classes.imgContainer}>
                <img src={img} alt={title} className={classes.img} />
                <div className={classes.info}>
                    <Typography variant="h2" className={classes.title}>
                        {title}
                    </Typography>
                    <Link to={`/products/${cat}`} style={{ textDecoration: "none" }}>
                        <Button variant="contained">shop now</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoriesItem;
