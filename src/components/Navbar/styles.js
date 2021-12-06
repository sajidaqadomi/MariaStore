import { makeStyles } from "@material-ui/core";
import colors from "../../config/colors";


export default makeStyles((theme) => ({
    appBar: {
        top: 30
    },
    toolbar: {
        justifyContent: 'space-between',
        backgroundColor: colors.white


    },
    leftSide: {
        display: 'flex',
        flex: 1,

    },
    select: {
        '&:before': {
            border: 'none'
        },
        '&:hover': {
            '&:before': {
                border: 'none'

            }

        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }

    },
    search: {
        display: 'flex',
        alignItems: 'center',
        border: `0.5px solid ${colors.light}`,
        marginLeft: theme.spacing(3),
        padding: theme.spacing(.5, 2),
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            padding: theme.spacing(.5, 1)
        }


    },
    inputSearch: {

    },
    searchIcon: {
        color: 'gray',
        fontSize: 16,
        marginLeft: '10px'

    },
    centerSide: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center'

    },
    logo: {

        color: colors.dark,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
            textAlign: 'left',
            paddingLeft: theme.spacing(1),

        }


    },
    rightSide: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
            flex: 2
        }

    },
    link: {
        fontSize: '14px',
        cursor: 'pointer',
        marginRight: theme.spacing(2),
        textTransform: 'upperCase',
        color: colors.dark,
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]: {
            marginRight: theme.spacing(1.5)
        }


    },
    shoppingIcon: {
        color: colors.dark
    }

}))