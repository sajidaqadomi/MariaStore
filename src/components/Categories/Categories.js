import { Container, Typography } from "@material-ui/core";
import React from "react";
//import { useResponsive } from "react-hooks-responsive";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import CategoriesItem from "./CategoriesItem/CategoriesItem";
import { ScrollList, SectionTitle } from "..";

//const breakpoints = { xs: 0, sm: 480, md: 1024 };

const Categories = () => {
    const classes = useStyles();
    const categories = useSelector((state) => state.categories.categories);

    // const { screenIsAtMost } = useResponsive(breakpoints);
    if (categories.isLoading) return "loading...";
    return (
        <>
            <SectionTitle title='Shop by Category' />
            <Container maxWidth='lg'>

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
