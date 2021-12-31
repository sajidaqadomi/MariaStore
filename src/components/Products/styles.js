import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        overflow: 'hidden',
        display: 'flex',
        // flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        backgroundColor: theme.palette.background.paper,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    },
    imageList: {
        width: '100%',
        flex: 1
    }

}))