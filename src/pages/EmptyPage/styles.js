import { makeStyles } from "@material-ui/core";

import colors from "../../config/colors";

export default makeStyles((theme) => ({
    content: {
        height: '100vh',
        backgroundColor: colors.light,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textTransform: 'uppercase'
    }

}))