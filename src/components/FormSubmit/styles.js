import { alpha, makeStyles } from "@material-ui/core";
import colors from "../../config/colors";

export default makeStyles((theme) => ({
    btn: {
        backgroundColor: colors.tail,
        color: colors.white,
        width: '40%',
        fontWeight: 700,
        transition: 'all .3s ease',

        '&:hover': {
            cursor: 'pointer',
            backgroundColor: alpha(colors.tail, .8)
        }

    }
}))