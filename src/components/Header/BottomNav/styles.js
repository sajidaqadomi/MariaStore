import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        '& .MuiTabs-scroller': {
            '&.MuiTabs-fixed': {
                // [theme.breakpoints.down('sm')]: {
                //     overflowX: 'scroll'
                // }
            }
        }
    }
}))
