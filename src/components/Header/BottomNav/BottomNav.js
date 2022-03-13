import { Container, StylesProvider, Tab, Tabs } from "@material-ui/core";
import React from "react";

const BottomNav = ({ value, handleChange, data }) => {
    return (
        <Container maxWidth="xl">
            <StylesProvider>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                    // wrapped
                    variant="scrollable"
                    scrollButtons="auto"
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
