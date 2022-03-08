import { Button, Container, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

import useStyles from './styles'

const EmptyPage = () => {
  const { state } = useLocation()
  const classes = useStyles()

  // useEffect(() => {
  //   if (location) console.log(location)
  // }, [location])

  return (

    <div className={classes.content}>
      <Typography variant='h3' gutterBottom className={classes.title} >{state.value}</Typography>
      <Button variant="contained" color="primary" component={Link} to={"/"}>
        Go to Homepage
      </Button>
    </div>


  )
}

export default EmptyPage