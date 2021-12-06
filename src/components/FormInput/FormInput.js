import { TextField } from "@material-ui/core";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const FormInput = ({ name, label }) => {
    const methods = useFormContext();
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
                    fullWidth
                    error={
                        methods.formState.errors?.message ? methods.formState?.errors : null
                    }
                    helperText={methods.formState?.errors?.message}
                />
            )}
        />
    );
};

export default FormInput;
