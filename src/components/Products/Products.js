import {
    Container,
    ImageList,
    MenuItem,
    Select,
    Typography,
} from "@material-ui/core";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useResponsive } from "react-hooks-responsive";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import useStyles from "./styles";
import { ColorsOption } from "../../utility/colors";
import { SizeOptions } from "../../utility/size";
import Product from "./Product";
import { getProducts } from "../../actions/products";
import { Loading, MenuSelect, SectionTitle } from "..";
import { TargetContext } from "../../contexts/TargetContext";
import ErrorMessage from "../ErrorMessage";

const breakpoints = { xs: 0, sm: 480, md: 1024 };

const Products = ({ catId, searchQuery }) => {
    const classes = useStyles();
    const { screenIsAtMost } = useResponsive(breakpoints);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cat: title } = useParams();

    const [isAtHome, setIsAtHome] = useState(true);
    const location = useLocation();

    const { products, isLoading } = useSelector((state) => state.products);
    const { errors } = useSelector((state) => state.dataStatus);
    const [listError, setListError] = useState(undefined);

    const [filter, setFilter] = useState({ color: [], size: [] });
    const [sort, setSort] = useState("newest");
    const [filterProducts, setFilterProducts] = useState(products);
    const { target } = useContext(TargetContext);



    useEffect(() => {
        if (location.search) {
        } else {
            if (title && catId) {
                dispatch(getProducts(target, catId));
            }
            !title && dispatch(getProducts(target));
        }
    }, [dispatch, catId, title, target, location.search]);

    useEffect(() => {
        if (errors.length) {
            let productsError = errors.filter((err) => err.type === "productsList");
            setListError(...productsError);
        } else {
            setListError(undefined);
        }
    }, [errors]);

    useEffect(() => {
        // console.log(products, "products");
        if (products) {
            catId
                ? setFilterProducts(products)
                : setFilterProducts(products.slice(0, 8));
        }

    }, [products, catId]);

    useEffect(() => {
        catId && products &&
            setFilterProducts(
                products.filter((item) => {
                    return Object.entries(filter).every(([key, value]) => {
                        return value.length
                            ? [...value].some((v) => item[key].includes(v))
                            : true;
                    });
                })
            );
    }, [filter, catId, products]);

    const handleFilter = (e) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            [e.target.name]: e.target.value,
        }));
    };

    const sortPriceByAsc = useCallback(() => {
        let sortedProduct = [...filterProducts].sort((a, b) => +a.price - +b.price);
        setFilterProducts((prev) => sortedProduct);
    }, [sort]);
    const sortPriceByDesc = useCallback(() => {
        let sortedProduct = [...filterProducts].sort((a, b) => +b.price - +a.price);
        setFilterProducts((prev) => sortedProduct);
    }, [sort]);

    const sortByNewest = useCallback(() => {
        if (filterProducts) {
            let sortedProduct = [...filterProducts].sort(
                (a, b) =>
                    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
            setFilterProducts((prev) => sortedProduct);
        }
    }, [sort]);
    useEffect(() => {
        if (catId) {
            if (sort === "asc") sortPriceByAsc();
            if (sort === "desc") sortPriceByDesc();
            if (sort === "newest") sortByNewest();
        }
    }, [sort, catId, sortPriceByAsc, sortPriceByDesc, sortByNewest]);

    useEffect(() => {
        let lastPath = location.pathname.split("/").slice(-1)[0];
        if (lastPath === "women" || lastPath === "men") {
            setIsAtHome(true);
        } else {
            setIsAtHome(false);
        }
    }, [location]);

    if (isLoading) {
        return <Loading />;
    }
    if (listError) {
        return (
            <>
                {isAtHome && <SectionTitle title="Shop by newest" />}
                <ErrorMessage msg={listError.error} title={listError.errorTitle} />
            </>
        );
    }

    if (products && !products.length && !isAtHome) {
        // console.log('empty products')
        navigate(
            `/no_results_page?v=${title ? title : isAtHome ? undefined : searchQuery
            }`,
            {
                state: {
                    value: isAtHome
                        ? "There is no any product"
                        : title
                            ? "NOTHING MATCHES CURRENT Category"
                            : "NOTHING MATCHES YOUR SEARCH",
                },
            }
        );
        //return <Typography>hi free</Typography>
    }



    return (
        <>
            {!isAtHome && (
                <Container>
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
            )}
            {isAtHome && <SectionTitle title="Shop by newest" />}
            <Container maxWidth="xl">
                <div className={classes.root}>
                    <ImageList
                        rowHeight={screenIsAtMost("md") ? 350 : 400}
                        cols={screenIsAtMost("md") ? (screenIsAtMost("sm") ? 1 : 2) : 4}
                        gap={16}
                        className={classes.imageList}
                    >
                        {filterProducts && filterProducts.map((product) => {
                            return <Product key={product._id} product={product} />;
                        })}
                    </ImageList>
                </div>
            </Container>
        </>
    );
};

export default Products;
