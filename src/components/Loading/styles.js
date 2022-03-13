import { makeStyles } from "@material-ui/core";

import colors from "../../config/colors";

export default makeStyles((theme) => ({
    loaderContainer: {
        height: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    root: {
        color: colors.tail,
    },
}));
