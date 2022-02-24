import React from 'react'
import { CircularProgress, Container } from "@material-ui/core";

import colors from '../../config/colors';
import useStyles from './styles'


const LoadingComponent = () => {
    const classes = useStyles()
    return (
        <Container maxWidth='xl'>
            <div className={classes.loaderContainer}>
                <CircularProgress variant="indeterminate" className={classes.root} size={60} />
            </div>
        </Container>
    )
}

export default LoadingComponent