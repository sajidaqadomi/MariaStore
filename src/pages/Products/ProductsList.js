import { Container, MenuItem, Select, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

import { MenuSelect, Products } from "../../components";
import { TargetContext } from "../../contexts/TargetContext";
import { ColorsOption } from "../../utility/colors";
import { SizeOptions } from "../../utility/size";
import useStyles from "./styles";

const ProductsList = () => {
    const classes = useStyles();
    const { cat: title } = useParams();
    const { categories } = useSelector((state) => state.categories);
    const [currCategory, setCurrCategory] = useState({});
    const { target } = useContext(TargetContext)

    const [filter, setFilter] = useState({ color: [], size: [] });
    const [sort, setSort] = useState("newest");

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };
    const searchQuery = useQuery().get("searchQuery");

    useEffect(() => {
        if (title && categories.length) {
            let currentCat = categories.filter(
                (category) => category.title === title
            );
            setCurrCategory(currentCat[0]);
        }
    }, [categories, title]);

    useEffect(() => {
        console.log(currCategory)
    }, [currCategory]);

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
                    {searchQuery ? (`Your search results for${searchQuery}`) : (target === 'men' ? `Men's ${title}` : `Women's ${title}`)}
                </Typography>
                <Typography variant="p" className={classes.desc} component='p'>
                    {searchQuery ? `` : currCategory?.cat}
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
            <Products filter={filter} sort={sort} catId={currCategory?.id} searchQuery={searchQuery} />
        </>
    );
};

export default ProductsList;
