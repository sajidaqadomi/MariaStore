import { Container, ImageList } from "@material-ui/core";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useResponsive } from "react-hooks-responsive";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import useStyles from "./styles";
import Product from "./Product";
import { getProducts } from "../../actions/products";
import { Loading, SectionTitle } from "..";
import { TargetContext } from "../../contexts/TargetContext";

const breakpoints = { xs: 0, sm: 480, md: 1024 };

const Products = ({ filter, sort, catId, searchQuery }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [isAtHome, setIsAtHome] = useState(true);
    const location = useLocation()
    const { products, isLoading } = useSelector((state) => state.products);
    const navigate = useNavigate()
    //  const { categories } = useSelector((state) => state.categories);
    const [filterProducts, setFilterProducts] = useState(products);
    const { cat: title } = useParams();
    const { target } = useContext(TargetContext)

    const { screenIsAtMost } = useResponsive(breakpoints);

    useEffect(() => {
        console.log(location, 'location')
        if (location.search) {

        } else {
            // let currCategory;
            if (title && catId) {
                // currCategory = categories.filter((category) => category.title === title);
                console.log(catId, 'catId')
                dispatch(getProducts(target, catId));
            }

            !title && dispatch(getProducts(target));



        }

    }, [dispatch, catId, title, target, location.search]);

    useEffect(() => {
        catId ? setFilterProducts(products) : setFilterProducts(products.slice(0, 8));
    }, [products, catId]);

    useEffect(() => {
        catId &&
            setFilterProducts(
                products.filter((item) => {
                    return Object.entries(filter).every(([key, value]) => {
                        return value.length ? [...value].some(v => item[key].includes(v)) : true;
                    });
                })
            );
    }, [filter, catId, products]);

    const sortPriceByAsc = useCallback(
        () => {
            let sortedProduct = [...filterProducts].sort((a, b) => (+a.price - +b.price))
            setFilterProducts((prev) => sortedProduct);
        }, [sort]

    )
    const sortPriceByDesc = useCallback(
        () => {
            let sortedProduct = [...filterProducts].sort((a, b) => (+b.price - +a.price))
            setFilterProducts((prev) => sortedProduct)
        },
        [sort]
    );

    const sortByNewest = useCallback(
        () => {

            let sortedProduct = [...filterProducts].sort((a, b) => (new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))

            setFilterProducts((prev) => sortedProduct);
        },
        [sort]
    );
    useEffect(() => {
        if (catId) {
            if (sort === "asc") sortPriceByAsc();
            if (sort === "desc") sortPriceByDesc();
            if (sort === "newest") sortByNewest();
        }
    }, [sort, catId, sortPriceByAsc, sortPriceByDesc, sortByNewest]);

    useEffect(() => {
        let lastPath = location.pathname.split('/').slice(-1)[0]
        if (lastPath === "women" || lastPath === "men") {
            setIsAtHome(true);
        } else {
            setIsAtHome(false);
        }
    }, [location]);

    if (isLoading) return <Loading />;
    if (!products.length) navigate(`/no_results_page?v=${title ? title : isAtHome ? undefined : searchQuery}`, { state: { value: isAtHome ? 'There is no any product' : (title ? "NOTHING MATCHES CURRENT Category" : "NOTHING MATCHES YOUR SEARCH") } })
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

                            return <Product key={product.id} product={product} />
                        })}
                    </ImageList>
                </div>
            </Container>
        </>
    );
};

export default Products;
