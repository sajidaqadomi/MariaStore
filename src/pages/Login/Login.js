import { Grid, Link, Paper, Typography } from "@material-ui/core";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FormInput, FormSubmit } from "../../components";
import useStyles from "./styles";

const Login = () => {
    const methods = useForm({
        defaultValues: {
            userName: "",
            password: "",
        },
    });

    const classes = useStyles();

    const onSubmit = (data) => {
        console.log(data, "data");
    };

    return (
        <FormProvider {...methods}>
            <div className={classes.container}>
                <Paper className={classes.paper}>
                    <Typography variant="h2" className={classes.formTitle} gutterBottom>
                        SIGN IN
                    </Typography>
                    <form
                        onSubmit={methods.handleSubmit(onSubmit)}
                        className={classes.form}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormInput name="userName" label="User Name" />
                            </Grid>
                            <Grid item xs={12}>
                                <FormInput name="password" label="Password" />
                            </Grid>
                        </Grid>
                        <FormSubmit title="login" style={{ marginTop: "10px" }} />

                        <Link className={classes.link}>
                            DO NOT YOU REMEMBER THE PASSWORD?
                        </Link>
                        <Link className={classes.link}>CREATE A NEW ACCOUNT</Link>
                    </form>
                </Paper>
            </div>
        </FormProvider>
    );
};

export default Login;
