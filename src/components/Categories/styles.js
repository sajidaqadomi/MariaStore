import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({

    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,

        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),

    },
    imageList: {
        width: '100%',
        maxHeight: '500px',

    },


}))