import { Container, ImageList } from "@material-ui/core";
import React from "react";

import useStyles from "./styles";
import { categories } from "../../data";
import CategoriesItem from "./CategoriesItem/CategoriesItem";

import { useResponsive } from "react-hooks-responsive";

const breakpoints = { xs: 0, sm: 480, md: 1024 };

const Categories = () => {
    const classes = useStyles();

    const { screenIsAtMost } = useResponsive(breakpoints);
    return (
        <Container maxWidth="xl" className={classes.root}>
            <ImageList
                className={classes.imageList}
                rowHeight={"400"}
                cols={screenIsAtMost("md") ? 1 : 3}
                gap={16}
            >
                {categories.map((item) => (
                    <CategoriesItem key={item.id} item={item} />
                ))}
            </ImageList>
        </Container>
    );
};

export default Categories;
