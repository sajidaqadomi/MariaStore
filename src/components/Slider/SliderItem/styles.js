import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
        backgroundColor: props => props.bg && (`#${props.bg}`)
    },
    imgContainer: {
        flex: 1
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'

    },
    desContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 50
    },
    title: {
        fontSize: '70px',
    },
    desc: {
        margin: '50px 0',
        fontSize: '20px',
        fontWeight: 500,
        letterSpacing: '3px'

    },
    btn: {
        fontSize: 20,
        width: 200
    }
}))