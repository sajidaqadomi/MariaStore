import { Container, Typography } from "@material-ui/core";
import React from "react";

import useStyles from "./styles";

const ErrorMessage = ({ msg, title }) => {
    const classes = useStyles();
    return (
        <Container maxWidth="xl" className={classes.container}>
            <div className={classes.errorContainer}>
                <Typography
                    variant="body1"
                    className={`${classes.text} ${classes.title}`}
                    gutterBottom
                >{`Error:${title}`}</Typography>
                <Typography component="p" className={classes.text}>
                    {msg}
                </Typography>
            </div>
        </Container>
    );
};

export default ErrorMessage;
