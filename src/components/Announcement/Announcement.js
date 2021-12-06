import { Typography } from "@material-ui/core";
import React from "react";

import useStyles from "./styles";

const Announcement = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.announcement}>
                <Typography component="h5" className={classes.text}>
                    super deal! free shipping on orders over $50
                </Typography>
            </div>
        </>
    );
};

export default Announcement;
