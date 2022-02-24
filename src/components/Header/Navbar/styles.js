import { makeStyles } from "@material-ui/core";
import colors from "../../../config/colors";


export default makeStyles((theme) => ({
    appBar: {
        boxShadow: " none",
        backgroundColor: "inherit",
        color: "inhert",
    },
    offset: theme.mixins.toolbar,
    toolbar: {
        justifyContent: "space-between",
        backgroundColor: colors.white,
        boxShadow: `inset 0 -2px 0 0 #d6ac76`,
    },
    leftSide: {
        display: "flex",
        flex: 2,
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    mobContent: {
        display: "flex",
    },
    select: {
        flex: 1,
        "&:before": {
            border: "none",
        },
        "&:hover": {
            "&:before": {
                border: "none",
            },
        },
    },
    search: {
        flex: 11,
    },
    mobArea: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            padding: `${theme.spacing(0.5)}px 0px`,
        },
    },
    searchIcon: {
        color: "gray",
        fontSize: 16,
        marginLeft: "10px",
    },
    centerSide: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        margin: `0 ${theme.spacing(1)}px`,
        [theme.breakpoints.down("sm")]: {
            justifyContent: "flex-start",
            marginLeft: 0,
        },
    },
    logo: {
        color: colors.dark,
        fontWeight: "bold",
        textAlign: "center",
        textDecoration: "none",
        cursor: "pointer",
        [theme.breakpoints.down("sm")]: {
            fontSize: "24px",
            textAlign: "left",
        },
    },
    rightSide: {
        flex: 2,
        display: "flex",
        justifyContent: "flex-end",
        [theme.breakpoints.down("sm")]: {
            alignItems: "center",
            flex: 2,
        },
    },
    link: {
        fontSize: "14px",
        cursor: "pointer",
        marginRight: theme.spacing(2),
        textTransform: "upperCase",
        color: colors.dark,
        textDecoration: "none",
        [theme.breakpoints.down("sm")]: {
            marginRight: theme.spacing(1.5),
        },
    },
    shoppingIcon: {
        color: colors.dark,
    },
}));
