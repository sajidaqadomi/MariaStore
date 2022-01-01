import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

const FormInput = ({ name, label, ...rest }) => {
    const methods = useFormContext();
    // console.log(methods, 'methods');
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword((showpass) => !showpass);
    };
    return (
        <Controller
            control={methods.control}
            name={name}
            render={({ field }) => (
                <TextField
                    {...field}
                    // placeholder={label}
                    label={label}
                    variant="outlined"
                    type={
                        (name === "password" || name === "confirmPassword") &&
                        (showPassword ? "text" : "password")
                    }
                    fullWidth
                    InputProps={{
                        endAdornment: (name === "password" || name === "confirmPassword") && (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    error={
                        methods.formState.errors[name]?.message
                            ? methods.formState?.errors[name].message
                            : null
                    }
                    helperText={methods.formState?.errors[name]?.message}
                    {...rest}
                />
            )}
        />
    );
};

export default FormInput;
