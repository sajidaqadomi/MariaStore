import { Container, Typography } from '@material-ui/core'
import React from 'react'

import useStyles from './styles'

const SectionTitle = ({ title }) => {
    const classes = useStyles()
    return (
        <Container maxWidth='xl'>
            <Typography variant='h3' className={classes.sectionTitle}>{title}</Typography>
        </Container>
    )
}

export default SectionTitle