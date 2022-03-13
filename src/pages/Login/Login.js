import { Grid, Link, Paper, Typography } from "@material-ui/core";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormInput, FormSubmit, Toast } from "../../components";
import useStyles from "./styles";
import { useNavigate } from "react-router";
import { AUTH_ERROR_RESET } from "../../utility/actionTypes";
import { signIn } from "../../actions/user";

let schema = yup.object().shape({
    userName: yup.string().required(),
    password: yup.string().required(),
});

const Login = () => {
    const methods = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched",
        defaultValues: {
            userName: "",
            password: "",
        },
    });
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const classes = useStyles();

    const onSubmit = (data) => {
        dispatch(signIn(data, navigate));
        methods.reset();
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch({ type: AUTH_ERROR_RESET });
    };

    return (
        <>
            <Toast
                open={error}
                onClose={handleClose}
                title="Sign In Failed"
                type="error"
                message={error}
            />
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
                                    <FormInput name="userName" label="User Name" type="text" />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormInput name="password" label="Password" />
                                </Grid>
                            </Grid>
                            <FormSubmit
                                title="login"
                                disabled={isLoading}
                                style={{ marginTop: "10px" }}
                            />
                            <Link className={classes.link}>
                                DO NOT YOU REMEMBER THE PASSWORD?
                            </Link>
                            <Link className={classes.link}>CREATE A NEW ACCOUNT</Link>
                        </form>
                    </Paper>
                </div>
            </FormProvider>
        </>
    );
};

export default Login;
