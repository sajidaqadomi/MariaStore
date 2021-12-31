import { alpha, makeStyles } from "@material-ui/core";
import colors from "../../config/colors";

export default makeStyles((theme) => ({
    container: {
        height: '100vh',
        background: `linear-gradient(
            rgba(255, 255,255, 0.5),
            rgba(255, 255, 255, 0.5)
          ),url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'


    },
    offset: theme.mixins.toolbar,
    paper: {
        width: '40vw',
        margin: 'auto',
        padding: '20px',
        [theme.breakpoints.down('sm')]: {
            width: '80%'
        }
        // marginTop: '60px'
    },
    formTitle: {
        fontSize: '24px',
        fontWeight: 300,
        textTransform: 'uppercase'
    },
    agreement: {
        fontSize: '12px',
        margin: '20px 0px',
    },
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