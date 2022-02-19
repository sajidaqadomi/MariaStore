import { Breadcrumbs } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

import useStyles from './styles'

const BreadcrumbComponent = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Breadcrumbs aria-label="breadcrumb" separator="›" >
                <Link color="inherit" to="/home" >
                    Home
                </Link>
                <Link color="inherit" to="/home" >
                    {"Women"}
                </Link>
                <Link
                    color="textPrimary"
                    to="/women/dress/"

                    aria-current="page"
                >
                    Breadcrumb
                </Link>
            </Breadcrumbs>

        </div>

    )
}

export default BreadcrumbComponent