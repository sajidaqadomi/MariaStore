import { alpha, makeStyles } from "@material-ui/core";
import { Height } from "@material-ui/icons";
import colors from "../../../config/colors";

export default makeStyles((theme) => ({
    iconsLayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: alpha(`${colors.black}`, 0.2),
        display: 'none',
        opacity: 0,
        transition: 'opacity .3s ease,display .3s ease'
    },
    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
        padding: theme.spacing(3),
        backgroundColor: '#f5fbfd',
        '&:hover': {
            '& $iconsLayer': {
                display: 'flex',
                opacity: 1
            }
        }
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'

    },

    avatar: {
        backgroundColor: colors.white,
        color: colors.black,
        margin: 10,
        transition: 'all .5s ease',
        '&:hover': {
            transform: 'scale(1.2)',
            backgroundColor: '#e9f5f5'
        }

    },


}))