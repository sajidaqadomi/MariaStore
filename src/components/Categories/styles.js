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
    slider: {
        marginTop: theme.spacing(3),
        '& .slick-list': {
            // margin: '0 -8px',
            '& .slick-slide': {
                '& > div': {
                    margin: '0 8px'
                }
            }
        }

    }


}))