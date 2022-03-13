import { makeStyles } from "@material-ui/core";

import colors from "../../config/colors";

export default makeStyles((theme) => ({
    amountContainer: {
        display: 'flex',
        alignItems: 'center',
        marginRight: theme.spacing(3),
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
}))