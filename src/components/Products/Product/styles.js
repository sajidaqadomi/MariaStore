import { alpha, makeStyles } from "@material-ui/core";
import zIndex from "@material-ui/core/styles/zIndex";
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
        zIndex: 3,
        transition: 'opacity .3s ease,display .3s ease'
    },
    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
        padding: theme.spacing(3),
        backgroundColor: '#f5fbfd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
            '& $iconsLayer': {
                display: 'flex',
                opacity: 1
            }
        }
    },
    imgContainer: {
        height: '75%',
        width: '100%',
        position: 'relative',
        backgroundImage: ({ img }) => `url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        zIndex: 2,
        [theme.breakpoints.down('md')]: {
            height: '100%',
        }


    },
    img: {
        width: '100%',
        //height: '100%',
        objectFit: 'cover'

    },
    circle: {
        width: 200,
        height: 200,
        backgroundColor: colors.white,
        position: 'absolute',
        borderRadius: '50%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: 1,
        [theme.breakpoints.down('md')]: {
            width: '140px',
            height: '140px'
        }


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