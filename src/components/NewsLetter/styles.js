import { makeStyles } from "@material-ui/core";

import colors from "../../config/colors";

export default makeStyles((theme) => ({
    root: {
        height: "50vh",
        backgroundColor: "#fcf5f5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        display: "flex",
        width: "50%",
        backgroundColor: colors.white,
        border: `1px solid gray `,
        [theme.breakpoints.down("sm")]: {
            width: "80%",
        },
    },
    input: {
        flex: 1,
        "& .MuiInputBase-root": {
            backgroundColor: colors.white,
            borderRadius: 0,
            border: "none",
            "& fieldset": {
                border: "none",
            },
        },
    },
    button: {
        width: "20%",
        backgroundColor: "teal",
        color: colors.white,
        borderRadius: 0,
    },
    title: {
        fontSize: "70px",
        marginBottom: "20px",
    },
    desc: {
        fontSize: "24px",
        fontWeight: 300,
        marginBottom: "20px",
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
        },
    },
}));
