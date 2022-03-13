import { makeStyles } from "@material-ui/core";
import colors from "../../../../config/colors";

export default makeStyles((theme) => ({
    paper: {
        margin: `0 ${theme.spacing(1)}px`,
        [theme.breakpoints.down("xs")]: {
            marginRight: 0,
        },
    },
    root: {
        border: `1px solid ${colors.light}`,
        padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
        borderRadius: "30px",
        [theme.breakpoints.down("sm")]: {
            borderRadius: 0,
        },
    },
    focused: {
        border: `1px solid ${colors.medium}`,
    },
}));
