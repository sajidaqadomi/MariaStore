import { Container, MenuItem, Select, Typography } from "@material-ui/core";
import React, { useState } from "react";

import { Products } from "../../components";
import useStyles from "./styles";

const ProductsList = () => {
    const classes = useStyles();

    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    return (
        <>
            <Container>
                <Typography variant="h2" component="h2" className={classes.title}>
                    Dresses
                </Typography>
                <div className={classes.filtersContainer}>
                    <div className={classes.filterContent}>
                        <Typography variant="body2" className={classes.filterText}>
                            Filter products:
                        </Typography>
                        <Select
                            className={classes.select}
                            value={color}
                            // label="Color"
                            variant="outlined"
                            displayEmpty
                            onChange={(e) => setColor(e.target.value)}
                        >
                            <MenuItem value={""} disabled>
                                Color
                            </MenuItem>
                            <MenuItem value={"red"}>red</MenuItem>
                            <MenuItem value={"green"}>Twenty</MenuItem>
                            <MenuItem value={"blue"}>Thirty</MenuItem>
                        </Select>
                        <Select
                            value={size}
                            // label="Color"
                            className={classes.select}
                            variant="outlined"
                            displayEmpty
                            onChange={(e) => setSize(e.target.value)}
                        >
                            <MenuItem value={""} disabled>
                                Size
                            </MenuItem>
                            <MenuItem value={"small"}>Small</MenuItem>
                            <MenuItem value={"medium"}>Medium</MenuItem>
                            <MenuItem value={"Large"}>Large</MenuItem>
                        </Select>
                    </div>
                    <div className={classes.filterContent}>
                        <Typography variant="body2" className={classes.filterText}>
                            Sort products:
                        </Typography>
                        <Select
                            className={classes.select}
                            style={{ marginRight: 0 }}
                            value={size}
                            // label="Color"
                            variant="outlined"
                            displayEmpty
                        // onChange={(e) => setSize(e.target.value)}
                        >
                            <MenuItem value={"Newest"}>Newest</MenuItem>
                            <MenuItem value={"Oldest"}>Oldest</MenuItem>
                        </Select>
                    </div>
                </div>
            </Container>
            <Products />
        </>
    );
};

export default ProductsList;
