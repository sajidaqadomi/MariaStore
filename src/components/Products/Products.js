import { Container, ImageList } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { useResponsive } from "react-hooks-responsive";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

import useStyles from "./styles";
import Product from "./Product";
import { getProducts } from "../../actions/products";
import { PanoramaSharp } from "@material-ui/icons";

const breakpoints = { xs: 0, sm: 480, md: 1024 };

const Products = ({ filter, sort }) => {
    const dispatch = useDispatch();
    const { products, isLoading } = useSelector((state) => state.products);
    const { categories } = useSelector((state) => state.categories);
    const [filterProducts, setFilterProducts] = useState(products);

    const params = useParams();
    const location = useLocation()

    console.log(params, location.pathname.split('/'))

    const cat = params.cat || location.pathname.split('/')[2]

    const classes = useStyles();
    const { screenIsAtMost } = useResponsive(breakpoints);
    console.log(cat, 'cat')
    useEffect(() => {
        let currCategory
        if (cat && categories.length) {
            currCategory = categories.filter((category) => category.cat === cat)
            dispatch(getProducts(currCategory[0].id))
        }

        !cat && dispatch(getProducts(null));
    }, [dispatch, categories, cat]);

    useEffect(() => {
        cat ? setFilterProducts(products) : setFilterProducts(products.slice(0, 8));
    }, [products, cat]);

    useEffect(() => {
        console.log(cat, location.pathname, 'tesssst')
        cat &&
            setFilterProducts(
                products.filter((item) => {
                    return Object.entries(filter).every(([key, value]) => {
                        return value ? item[key].includes(value) : true;
                    });
                })
            );
    }, [filter]);

    useEffect(() => {
        if (cat) {
            if (sort === "asc") sortPriceByAsc();
            if (sort === "desc") sortPriceByDesc();
            if (sort === "newest") sortByNewest();
        }
    }, [sort]);

    const sortPriceByAsc = () => {
        setFilterProducts((prev) => prev.sort((a, b) => a.price - b.price));
    };

    const sortPriceByDesc = () => {
        setFilterProducts((prev) => prev.sort((a, b) => b.price - a.price));
    };

    const sortByNewest = () => {
        setFilterProducts((prev) => prev.sort((a, b) => a.createdAt - b.createdAt));
    };

    if (isLoading) return "Loading...";
    return (
        <Container maxWidth="xl">
            <div className={classes.root}>
                <ImageList
                    rowHeight={screenIsAtMost("md") ? 200 : 400}
                    cols={screenIsAtMost("md") ? (screenIsAtMost("sm") ? 1 : 2) : 4}
                    gap={16}
                    className={classes.imageList}
                >
                    {filterProducts.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </ImageList>
            </div>
        </Container>
    );
};

export default Products;
