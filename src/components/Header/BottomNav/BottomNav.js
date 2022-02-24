import { Container, Paper, StylesProvider, Tab, Tabs } from "@material-ui/core";
import React from "react";

import useStyles from './styles'



const BottomNav = ({ value, handleChange, data }) => {
    const classes = useStyles()
    return (

        <Container maxWidth="xl">
            <StylesProvider >
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                    // wrapped
                    variant="scrollable"
                    scrollButtons="auto"
                // className={classes.root}
                >
                    {data.map((c) => (
                        <Tab key={c} label={c} />
                        // <Tab key={c} label={c} />
                    ))}
                </Tabs>
            </StylesProvider>
        </Container>

    );
};

export default BottomNav;
