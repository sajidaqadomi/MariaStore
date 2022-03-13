import { makeStyles } from "@material-ui/core";

import colors from "../../config/colors";

export default makeStyles((theme) => ({
    container: {
        backgroundColor: colors.lightDanger,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    errorContainer: {
        height: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    text: {
        color: colors.danger
    },
    title: {
        fontWeight: '600'
    }

}))