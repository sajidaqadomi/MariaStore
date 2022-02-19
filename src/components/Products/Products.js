import { Container, ImageList } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useResponsive } from "react-hooks-responsive";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

import useStyles from "./styles";
import Product from "./Product";
import { getProducts } from "../../actions/products";
import { SectionTitle } from "..";

const breakpoints = { xs: 0, sm: 480, md: 1024 };

const Products = ({ filter, sort }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [isAtHome, setIsAtHome] = useState(true);
    const location = useLocation()
    const { products, isLoading } = useSelector((state) => state.products);
    const { categories } = useSelector((state) => state.categories);
    const [filterProducts, setFilterProducts] = useState(products);
    const { cat: title } = useParams();

    const { screenIsAtMost } = useResponsive(breakpoints);

    useEffect(() => {
        // console.log('cat', cat)
        let currCategory;
        if (title && categories.length) {
            // console.log(categories, 'categories')
            currCategory = categories.filter((category) => category.title === title);
            dispatch(getProducts(currCategory[0].targetGender, currCategory[0].id));
        }

        // !title && dispatch(getProducts(null));
    }, [dispatch, categories, title]);

    useEffect(() => {
        title ? setFilterProducts(products) : setFilterProducts(products.slice(0, 8));
    }, [products, title]);

    useEffect(() => {
        title &&
            setFilterProducts(
                products.filter((item) => {
                    return Object.entries(filter).every(([key, value]) => {
                        return value.length ? [...value].some(v => item[key].includes(v)) : true;
                    });
                })
            );
    }, [filter, title, products]);

    useEffect(() => {
        //  console.log(sort, cat, 'is sort default')
        if (title) {
            if (sort === "asc") sortPriceByAsc();
            if (sort === "desc") sortPriceByDesc();
            if (sort === "newest") sortByNewest();
        }
    }, [sort, title]);

    useEffect(() => {
        let lastPath = location.pathname.split('/').slice(-1)[0]
        if (lastPath === "women" || lastPath === "men") {
            setIsAtHome(true);
        } else {
            setIsAtHome(false);
        }
    }, [location]);

    //console.log([1, 10, 5, 20].sort((a, b) => b - a))

    const sortPriceByAsc = () => {
        let sortedProduct = [...filterProducts].sort((a, b) => (+a.price - +b.price))
        setFilterProducts((prev) => sortedProduct);
    };

    const sortPriceByDesc = () => {
        let sortedProduct = [...filterProducts].sort((a, b) => (+b.price - +a.price))
        setFilterProducts((prev) => sortedProduct);
    };

    const sortByNewest = () => {
        console.log('sortByNewest')
        let sortedProduct = [...filterProducts].sort((a, b) => (new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))

        setFilterProducts((prev) => sortedProduct);
    };



    if (isLoading) return "Loading...";
    return (
        <>
            {isAtHome && <SectionTitle title='Shop by newest' />}
            <Container maxWidth="xl">
                <div className={classes.root}>
                    <ImageList
                        rowHeight={screenIsAtMost("md") ? 350 : 400}
                        cols={screenIsAtMost("md") ? (screenIsAtMost("sm") ? 1 : 2) : 4}
                        gap={16}
                        className={classes.imageList}
                    >
                        {filterProducts.map((product) => {
                            // console.log(product, 'sortcheck')
                            return <Product key={product.id} product={product} />
                        })}
                    </ImageList>
                </div>
            </Container>
        </>
    );
};

export default Products;
