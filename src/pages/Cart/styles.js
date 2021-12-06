import { makeStyles } from "@material-ui/core";

import colors from '../../config/colors'

export default makeStyles((theme) => ({
    title: {
        fontWeight: 300,
        textAlign: 'center',
        textTransform: 'uppercase',
        paddingTop: '20px',
    },
    top: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 0'
    },
    btn: {
        fontWeight: 600,
        cursor: 'pointe',
        border: `1px solid ${colors.black}`,
        borderRadius: 0,
        '&.MuiButton-contained': {
            backgroundColor: colors.black,
            color: colors.white,
            border: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '13px'
        }
    },
    links: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none'

        }

    },
    link: {
        textDecoration: 'underline',
        margin: '0 10px',
        color: colors.black,
        cursor: 'pointer',
    },
    bottom: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }

    },
    productsContainer: {
        flex: 3

    },

    product: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }

    },
    productDetails: {
        display: 'flex',

        /// alignItems: 'center'
    },
    productInfo: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        padding: '20px'

    },
    img: {
        width: '200px',
    },
    priceDetails: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: '1'

    },
    amountContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
    },
    amount: {
        fontSize: '24px',
        fontWeight: 600,
        margin: '0 5px',
        [theme.breakpoints.down('sm')]: {
            margin: '5px 15px'
        }


    },
    price: {
        fontSize: '30px',
        fontWeight: 200,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '20px'
        }
    },
    summary: {
        flex: 1,
        borderRadius: '10px',
        border: `1px solid ${colors.light}`,
        padding: '20px',
        height: 'max-content'
    },
    summaryTitle: {
        fontWeight: 200,
        fontSize: '25px'

    },
    summaryItem: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '30px 0'
    },
    total: {
        fontSize: '24px',
        fontWeight: 300
    }



}))