import { IconButton, Typography } from '@material-ui/core'
import { Add, Remove } from '@material-ui/icons'
import React from 'react'

import useStyles from './styles'

const AmountController = ({ handleQuantity, quantity, ...rest }) => {
    const classes = useStyles()
    return (
        <div className={classes.amountContainer} {...rest}>
            <IconButton onClick={() => handleQuantity("dec")}>
                <Remove />
            </IconButton>
            <Typography
                className={classes.amount}
                variant="caption"
                component="span"
            >
                {quantity}
            </Typography>
            <IconButton onClick={() => handleQuantity("inc")}>
                <Add />
            </IconButton>
        </div>
    )
}

export default AmountController