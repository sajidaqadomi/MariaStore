import { makeStyles } from "@material-ui/core";
import colors from "../../config/colors";

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
    slider: {
        marginTop: theme.spacing(3),
        '& .slick-prev,& .slick-next': {
            '&:before': {
                color: colors.black

            }

        },

        '& .slick-list': {
            // margin: '0 -8px',
            '& .slick-slide': {
                '& > div': {
                    margin: '0 8px'
                }
            },

        }

    },
    sectionTitle: {
        display: 'block',
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }


}))