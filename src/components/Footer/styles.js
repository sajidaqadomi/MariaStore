import { makeStyles } from "@material-ui/core";
import colors from "../../config/colors";

export default makeStyles((theme) => ({

    footer: {


    },
    contactItem: {

    },
    footerContent: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }

    },
    title: {
        marginBottom: '30px'

    },
    about: {
        flex: 1,
        padding: '20px'

    },
    desc: {
        margin: '20px 0'

    },
    social: {
        display: 'flex',
        flexDirection: 'row'

    },
    icon: {
        marginRight: '20px',
    },
    links: {
        flex: 1,
        padding: '20px',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }

    },
    linksContent: {
        display: 'flex',
        margin: '20px 0',
        flexWrap: 'wrap'
    },
    link: {
        width: '50%',
        marginBottom: theme.spacing(2)
    },
    contact: {
        flex: 1,
        padding: '20px',
        [theme.breakpoints.down('sm')]: {
            backgroundColor: colors.light
        }

    },
    contactItems: {
        display: 'flex',
        flexDirection: 'column',
        '& $contactItem': {
            marginBottom: '20px',
            '& $icon': {
                marginRight: '10px',
            }
        }
    },
    payment: {
        width: '50%'
    }

}))