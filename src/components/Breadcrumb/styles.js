import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}))