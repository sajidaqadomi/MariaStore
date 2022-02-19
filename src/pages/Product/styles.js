import { makeStyles } from "@material-ui/core";
import colors from "../../config/colors";

export default makeStyles((theme) => ({
    productContent: {
        display: 'flex',
        padding: '20px 0',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',

        }
    },
    imgContainer: {
        flex: '1',
        // width: '100%',
        height: '400px',
        [theme.breakpoints.down('sm')]: {
            height: '350px'
        }

    },
    img: {
        width: '100%',
        height: '100%',
        // objectFit: 'cover',

    },
    productInfo: {
        flex: '1',
        paddingLeft: '50px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 0

        }

    },
    title: {
        fontWeight: 200
    },
    desc: {
        margin: '20px 0',
        fontWeight: 100
    },
    price: {
        fontWeight: 100,
        fontSize: '40px'
    },
    filterContainer: {
        display: 'flex',
        width: '50%',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '30px 0',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    filter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    filterTitle: {
        fontWeight: 200,
        fontSize: '20px'
    },
    colors: {
        display: 'flex',

    },
    select: {
        marginLeft: '10px'
    },
    addContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }

    },
    amountContainer: {
        display: 'flex',
        alignItems: 'center',

    },
    amount: {
        width: '30px',
        height: '30px',
        border: `1px solid ${colors.light}`,
        borderRadius: 10,
        textAlign: 'center',
        lineHeight: '30px',
        fontWeight: 700,
        margin: '0 5px'
    },
    btn: {
        border: `2px solid ${colors.tail}`,
        fontWeight: 700,
        cursor: 'pointer'
    }


}))