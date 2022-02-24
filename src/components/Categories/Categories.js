import { Container } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import CategoriesItem from "./CategoriesItem/CategoriesItem";
import { ScrollList, SectionTitle } from "..";

const Categories = () => {
    const classes = useStyles();
    const categories = useSelector((state) => state.categories.categories);

    if (categories.isLoading) return "loading...";
    return (
        <>
            <SectionTitle title="Shop by Category" className={classes.sectionTitle} />
            <Container maxWidth="lg">
                <div className={classes.slider}>
                    <ScrollList slidesNumber={categories.length}>
                        {categories.map((item) => (
                            <CategoriesItem key={item._id} item={item} />
                        ))}
                    </ScrollList>
                </div>
            </Container>
        </>
    );
};

export default Categories;
