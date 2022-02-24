import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    title: {
        margin: `${theme.spacing(3)}px 0`,
        textTransform: 'capitalize',
        //width: '50%',
        /// margin: 'auto',
        textAlign: 'center'


    },
    desc: {
        lineHeight: '1.75',
        width: "80%",
        margin: 'auto',
        textAlign: "center",
        marginBottom: theme.spacing(3),

    },
    select: {
        marginRight: 20,
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
            width: '100%',
            margin: theme.spacing(1, 0)

        }

    },

    filtersContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {


        }
    },
    filterText: {
        marginRight: 20,
        fontWeight: 600,
        fontSize: '20px',
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
            fontSize: '18px'
        }

    },
    filterContent: {
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginRight: '8px',
        }
    },
    rightFilter: {
        display: 'flex'

    }


}))