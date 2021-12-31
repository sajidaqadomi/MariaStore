import { alpha, makeStyles } from "@material-ui/core";
import colors from "../../../config/colors";

export default makeStyles((theme) => ({
    imgContainer: {
        position: 'relative',
        width: '100%',
        height: 300,
        fontSize: 0


    },
    imgListItem: {
        //  padding: '0px 8px'
        transition: 'all .3s',
        transform: 'scale(1, 0.95)',
        '&:hover': {
            transform: 'scale(1, 1)',

        }

    },
    img: {
        maxWidth: '100%',
        width: '100%',
        height: '100%',
        objectFit: 'cover'

    },
    info: {
        position: 'absolute',
        backgroundColor: alpha(colors.black, .4),
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(1)
        }

        // alignItems: 'center'


    },
    title: {
        // textAlign: 'center',
        color: colors.white,
        marginBottom: theme.spacing(2),
        wordBreak: 'break-all',
        [theme.breakpoints.down('md')]: {
            marginBottom: theme.spacing(1),
            fontSize: 40,
            lineHeight: 1.18,
            letterSpacing: '.4px'
        }

    }

}))