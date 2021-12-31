import { Button, TextField, Typography } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import React from "react";
import { useLocation } from "react-router-dom";

import useStyles from "./styles";

const NewsLetter = () => {
    const classes = useStyles();
    const { pathname } = useLocation();
    //  console.log(location)
    if (pathname === "/login" || pathname === "/register" || pathname === "/cart")
        return <></>;
    return (
        <div className={classes.root}>
            <Typography variant="h1" component="h2" className={classes.title}>
                Newsletter
            </Typography>
            <Typography variant="body1" className={classes.desc}>
                Get timely updates from your favorite products
            </Typography>
            <div className={classes.inputContainer}>
                <TextField
                    variant="outlined"
                    placeholder="Your email"
                    type="email"
                    className={classes.input}
                />
                <Button variant="contained" className={classes.button}>
                    <Send />
                </Button>
            </div>
        </div>
    );
};

export default NewsLetter;
