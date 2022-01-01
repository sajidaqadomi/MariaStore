import { Container, MenuItem, Select, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { Products } from "../../components";
import useStyles from "./styles";

const ProductsList = () => {
    const classes = useStyles();
    const { cat } = useParams();
    // const location = useLocation();
    // const cat = params.cat || location.pathname.split('/')[1]

    const [filter, setFilter] = useState({ color: "", size: "" });
    const [sort, setSort] = useState("newest");

    const handleFilter = (e) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <Container>
                <Typography variant="h2" component="h2" className={classes.title}>
                    {cat}
                </Typography>
                <div className={classes.filtersContainer}>
                    <div className={classes.filterContent}>
                        <Typography variant="body2" className={classes.filterText}>
                            Filter products:
                        </Typography>
                        <Select
                            className={classes.select}
                            value={filter.color}
                            // label="Color"
                            name="color"
                            variant="outlined"
                            displayEmpty
                            onChange={handleFilter}
                        >
                            <MenuItem value={""} disabled>
                                Color
                            </MenuItem>
                            <MenuItem value={"white"}>white</MenuItem>
                            <MenuItem value={"black"}>black</MenuItem>
                            <MenuItem value={"red"}>red</MenuItem>
                            <MenuItem value={"blue"}>blue</MenuItem>
                            <MenuItem value={"yellow"}>yellow</MenuItem>
                            <MenuItem value={"green"}>green</MenuItem>
                        </Select>
                        <Select
                            value={filter.size}
                            // label="Color"
                            className={classes.select}
                            name="size"
                            variant="outlined"
                            displayEmpty
                            onChange={handleFilter}
                        >
                            <MenuItem value={""} disabled>
                                Size
                            </MenuItem>
                            <MenuItem value={"xs"}>XS</MenuItem>
                            <MenuItem value={"s"}>S</MenuItem>
                            <MenuItem value={"m"}>M</MenuItem>
                            <MenuItem value={"l"}>L</MenuItem>
                            <MenuItem value={"xl"}>XL</MenuItem>
                        </Select>
                    </div>
                    <div className={classes.filterContent}>
                        <Typography variant="body2" className={classes.filterText}>
                            Sort products:
                        </Typography>
                        <Select
                            className={classes.select}
                            style={{ marginRight: 0 }}
                            value={sort}
                            // label="Color"
                            variant="outlined"
                            // displayEmpty
                            onChange={(e) => setSort(e.target.value)}
                        >
                            <MenuItem value={"newest"}>Newest</MenuItem>
                            <MenuItem value={"asc"}>Price (asc)</MenuItem>
                            <MenuItem value={"desc"}>Price (desc)</MenuItem>
                        </Select>
                    </div>
                </div>
            </Container>
            <Products filter={filter} sort={sort} />
        </>
    );
};

export default ProductsList;
