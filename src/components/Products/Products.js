import { Container, ImageList } from "@material-ui/core";
import React from "react";

import { popularProducts } from "../../data";
import Product from "./Product";
import { useResponsive } from "react-hooks-responsive";

import useStyles from "./styles";

const breakpoints = { xs: 0, sm: 480, md: 1024 };

const Products = () => {
    const classes = useStyles();

    const { screenIsAtMost } = useResponsive(breakpoints);
    return (
        <Container maxWidth="xl" className={classes.root}>
            <ImageList
                rowHeight={screenIsAtMost("md") ? 200 : 400}
                cols={screenIsAtMost("md") ? (screenIsAtMost("sm") ? 1 : 2) : 4}
                gap={16}
            >
                {popularProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </ImageList>
        </Container>
    );
};

export default Products;
