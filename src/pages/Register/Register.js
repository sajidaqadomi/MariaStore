import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FormInput, FormSubmit } from "../../components";
import useStyles from "./styles";

const Register = () => {
    const methods = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
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
                        create an acount
                    </Typography>
                    <form
                        onSubmit={methods.handleSubmit(onSubmit)}
                        className={classes.form}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <FormInput name="firstName" label="First Name" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormInput name="lastName" label="Last Name" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormInput name="userName" label="User Name" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormInput name="email" label="Email" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormInput name="password" label="Password" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormInput name="confirmPassword" label="ConfirmPassword" />
                            </Grid>
                        </Grid>
                        <Typography variant="body2" className={classes.agreement}>
                            By creating an account, I consent to the processing of my personal
                            data in accordance with the <b>PRIVACY POLICY</b>
                        </Typography>
                        <FormSubmit title="create" />
                    </form>
                </Paper>
            </div>
        </FormProvider>
    );
};

export default Register;
