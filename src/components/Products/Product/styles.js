import { alpha, makeStyles } from "@material-ui/core";
import colors from "../../../config/colors";

export default makeStyles((theme) => ({
    deleteLayer: {
    },
    iconsLayer: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: alpha(`${colors.black}`, 0.2),
        display: "none",
        opacity: 0,
        zIndex: 3,
        transition: "opacity .3s ease,display .3s ease",
        '&$deleteLayer': {
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            backgroundColor: alpha(`${colors.black}`, 0),
            display: "flex",
            opacity: 1,
            zIndex: 3,

        }
    },
    container: {
        width: "100%",
        // height: "100%",
        position: "relative",
        padding: theme.spacing(1),
        backgroundColor: "#f5fbfd",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
            "& $iconsLayer": {
                display: "flex",
                opacity: 1,
            },
        },
    },
    imgContainer: {
        // height: "100%",
        height: "366px",
        width: "100%",
        position: "relative",
        //  backgroundImage: ({ img }) => `url(${img})`,
        //  backgroundPosition: "center",
        //  backgroundSize: "cover",
        //  backgroundRepeat: "no-repeat",
        zIndex: 2,
        [theme.breakpoints.down("md")]: {
            // height: "100%",
        },
    },
    img: {
        width: "100%",
        //height: '100%',
        objectFit: "cover",
    },
    avatar: {
        backgroundColor: colors.white,
        color: colors.black,
        margin: 10,
        transition: "all .5s ease",
        cursor: "pointer",
        "&.Mui-disabled": {
            backgroundColor: alpha(`${colors.white}`, 0.4),
        },
        "&:hover": {
            transform: "scale(1.2)",
            backgroundColor: "#e9f5f5",
        },
    },
    productDetails: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
    },
    title: {
        flex: 1

    },
    price: {
        fontWeight: "600",
        fontSize: 18
    },
    colors: {
        display: 'flex',
        padding: '8px 0',
        border: `1px solid ${colors.light}`,
        marginBottom: theme.spacing(1),
        borderLeft: 0,
        borderRight: 0,
    },
    btn: {
        border: `2px solid ${colors.tail}`,
        fontWeight: 700,
        cursor: 'pointer'
    },
    select: {
        marginBottom: theme.spacing(1)
    },
}

));
