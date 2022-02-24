import { Container, Typography } from '@material-ui/core'
import React from 'react'

import useStyles from './styles'

const SectionTitle = ({ title, ...rest }) => {
    const classes = useStyles()
    return (
        <Container maxWidth='xl'{...rest}>
            <Typography variant='h3' className={classes.sectionTitle}>{title}</Typography>
        </Container>
    )
}

export default SectionTitle