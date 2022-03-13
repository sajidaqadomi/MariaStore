import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { signUp } from "../../actions/user";
import { FormInput, FormSubmit, Toast } from "../../components";
import useStyles from "./styles";
import { AUTH_ERROR_RESET } from "../../utility/actionTypes";

let schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    userName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup
        .string()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain At Least 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "passwords must match"),
});

const Register = () => {
    const methods = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched",
        defaultValues: {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });
    const { isLoading, error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();

    const onSubmit = (data) => {
        dispatch(signUp(data, navigate));
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
                title="Register Failed"
                type="error"
                message={error}
            />

            <FormProvider {...methods}>
                <div className={classes.container}>
                    <div className={classes.offset} />
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
                                    <FormInput name="email" label="Email" type="email" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormInput name="password" label="Password" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormInput name="confirmPassword" label="ConfirmPassword" />
                                </Grid>
                            </Grid>
                            <Typography variant="body2" className={classes.agreement}>
                                By creating an account, I consent to the processing of my
                                personal data in accordance with the <b>PRIVACY POLICY</b>
                            </Typography>
                            <FormSubmit title="create" disabled={isLoading} />
                        </form>
                    </Paper>
                </div>
            </FormProvider>
        </>
    );
};

export default Register;
