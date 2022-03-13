import { Container, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Products } from "../../components";
import { TargetContext } from "../../contexts/TargetContext";
import { useSearch } from "../../hooks/useSearch";
import useStyles from "./styles";

const ProductsList = () => {
    const classes = useStyles();

    const { cat: title } = useParams();
    const { categories } = useSelector((state) => state.categories);
    const [currCategory, setCurrCategory] = useState({});
    const { target } = useContext(TargetContext);

    const { searchQuery, likeQuery } = useSearch();

    useEffect(() => {
        if (title && categories.length) {
            let currentCat = categories.filter(
                (category) => category.title === title
            );
            setCurrCategory(currentCat[0]);
        }
    }, [categories, title]);

    return (
        <>
            <Container>
                {searchQuery ? (
                    <>
                        <Typography
                            variant={"caption"}
                            component="h2"
                            className={`${classes.title} ${classes.searchTitle}`}
                        >
                            Your search results for:
                        </Typography>
                        <Typography
                            variant={"h3"}
                            className={`${classes.desc} ${classes.searchDesc}`}
                            component="p"
                        >
                            {`"${searchQuery}"`}
                        </Typography>
                    </>
                ) : likeQuery ? (
                    <></>
                ) : (
                    <>
                        <Typography variant={"h2"} component="h2" className={classes.title}>
                            {target === "men" ? `Men's ${title}` : `Women's ${title}`}
                        </Typography>
                        <Typography className={classes.desc} component="p">
                            {currCategory?.cat}
                        </Typography>
                    </>
                )}
            </Container>
            <Products
                catId={currCategory?.id}
                searchQuery={searchQuery}
                likeQuery={likeQuery}
            />
        </>
    );
};

export default ProductsList;
