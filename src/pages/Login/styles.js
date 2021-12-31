import { makeStyles } from "@material-ui/core";


export default makeStyles((theme) => ({
    container: {
        height: '100vh',
        background: `linear-gradient(
            rgba(255, 255,255, 0.5),
            rgba(255, 255, 255, 0.5)
          ),url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // paddingTop: '50px'
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    paper: {
        width: '40%',
        margin: 'auto',
        padding: '20px',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
        }
        // marginTop: '60px'
    },
    formTitle: {
        fontSize: '24px',
        fontWeight: 300,
        textTransform: 'uppercase'
    },
    link: {
        display: 'block',
        margin: '5px 0',
        cursor: 'pointer',
        fontSize: '12px',
        textDecoration: 'underline'
    }



}))