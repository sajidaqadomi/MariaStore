import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    title: {
        margin: `${theme.spacing(3)}px 0 ${theme.spacing(2)}px`,
        textTransform: 'capitalize',
        textAlign: 'center',
    },
    searchTitle: {
        fontSize: '16px',
        wordSpacing: "6px",
    },
    desc: {
        width: "80%",
        margin: 'auto',
        textAlign: "center",
        marginBottom: theme.spacing(3),
    },
    searchDesc: {
        lineHeight: '1.75',
    },
    select: {
        marginRight: 20,
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
            width: '100%',
            margin: theme.spacing(1, 0)
        }
    },
}))