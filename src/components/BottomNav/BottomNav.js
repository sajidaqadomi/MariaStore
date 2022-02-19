import { Container, Paper, Tab, Tabs } from '@material-ui/core'
import React, { useState } from 'react'


//const mainCategories = ["Clothing", "Shoes", "SportsWear", "Accessories"];

const BottomNav = ({ value, handleChange, data }) => {

    return (
        <Paper square>
            <Container maxWidth="xl">
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    {data.map(c => <Tab key={c} label={c} />)}

                </Tabs>
            </Container>
        </Paper>
    )
}

export default BottomNav