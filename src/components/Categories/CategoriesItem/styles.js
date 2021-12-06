import { makeStyles } from "@material-ui/core";
import colors from "../../../config/colors";

export default makeStyles((theme) => ({
    imgContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: 'yellow',

    },
    imgListItem: {


    },
    img: {
        maxWidth: '100%',
        width: '100%',
        height: '100%',
        objectFit: 'cover'

    },
    info: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        // alignItems: 'center'


    },
    title: {
        // textAlign: 'center',
        color: colors.white,
        marginBottom: theme.spacing(2),
        wordBreak: 'break-all'

    }

}))