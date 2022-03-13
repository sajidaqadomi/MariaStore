import React from "react";
import { CircularProgress, Container } from "@material-ui/core";

import useStyles from "./styles";

const LoadingComponent = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="xl">
            <div className={classes.loaderContainer}>
                <CircularProgress
                    variant="indeterminate"
                    className={classes.root}
                    size={60}
                />
            </div>
        </Container>
    );
};

export default LoadingComponent;
