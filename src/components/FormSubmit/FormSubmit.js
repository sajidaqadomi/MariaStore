import { Button } from "@material-ui/core";
import React from "react";

import useStyles from "./styles";

const FormSubmit = ({ title, ...rest }) => {
    const classes = useStyles();
    return (
        <Button variant="contained" type="submit" className={classes.btn} {...rest}>
            {title}
        </Button>
    );
};

export default FormSubmit;
