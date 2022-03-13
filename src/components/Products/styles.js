import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        overflow: "hidden",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        backgroundColor: theme.palette.background.paper,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    title: {
        margin: `${theme.spacing(3)}px 0 ${theme.spacing(2)}px`,
        textTransform: 'capitalize',
        textAlign: 'center',
    },
    emptyFilter: {

    },
    emptyRoot: {
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        '&$emptyFilter': {
            height: '250px'
        }

    },
    imageList: {
        width: "100%",
        flex: 1,

    },
    select: {
        marginRight: 20,
        [theme.breakpoints.down("sm")]: {
            marginRight: 0,
            width: "100%",
            margin: theme.spacing(1, 0),
        },
    },
    filtersContainer: {
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]: {},
    },
    filterText: {
        marginRight: 20,
        fontWeight: 600,
        fontSize: "20px",
        [theme.breakpoints.down("sm")]: {
            marginRight: 0,
            fontSize: "18px",
        },
    },
    filterContent: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "flex-start",
            marginRight: "8px",
        },
    },
    rightFilter: {
        display: "flex",
    },
}));
