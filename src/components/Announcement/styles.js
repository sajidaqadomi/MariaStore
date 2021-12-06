import { makeStyles } from "@material-ui/core";
import colors from "../../config/colors";

export default makeStyles((theme) => ({
    announcement: {
        height: 30,
        backgroundColor: colors.tail,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'fixed',
        // width: '100%',
        // top: 0,
        // left: 0,
        zIndex: 999

    },
    text: {
        fontSize: 14,
        color: colors.white,
        fontWeight: 500



    }
}))