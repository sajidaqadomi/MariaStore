import { Container, MenuItem, Select, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { MenuSelect, Products } from "../../components";
import { ColorsOption } from "../../utility/colors";
import { SizeOptions } from "../../utility/size";
import useStyles from "./styles";

const ProductsList = () => {
    const classes = useStyles();
    const { cat } = useParams();
    // const location = useLocation();
    // const cat = params.cat || location.pathname.split('/')[1]

    const [filter, setFilter] = useState({ color: [], size: [] });
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

                        <MenuSelect
                            label="Color"
                            className={classes.select}
                            value={filter.color}
                            name="color"
                            variant="outlined"
                            // displayEmpty
                            multiple
                            onChange={handleFilter}
                            options={ColorsOption.map((item) => ({
                                value: item[0],
                                label: item[1],
                            })).sort((a, b) => (a.label < b.label ? -1 : 1))}
                        />

                        <MenuSelect
                            label="Size"
                            className={classes.select}
                            value={filter.size}
                            name="size"
                            variant="outlined"
                            // displayEmpty
                            multiple
                            onChange={handleFilter}
                            options={SizeOptions.map((item) => ({
                                value: item,
                                label: item,
                            }))}
                        />

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
