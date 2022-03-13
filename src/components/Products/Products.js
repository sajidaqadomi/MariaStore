import {
    Button,
    Container,
    ImageList,
    MenuItem,
    Select,
    Typography,
} from "@material-ui/core";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useResponsive } from "react-hooks-responsive";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";

import useStyles from "./styles";
import { ColorsOption } from "../../utility/colors";
import { SizeOptions } from "../../utility/size";
import Product from "./Product";
import { getProducts, getProductsBySearch } from "../../actions/products";
import { Loading, MenuSelect, SectionTitle } from "..";
import { TargetContext } from "../../contexts/TargetContext";
import ErrorMessage from "../ErrorMessage";
import { FavoriteBorderOutlined } from "@material-ui/icons";

const breakpoints = { xs: 0, sm: 480, md: 1024 };

const Products = ({ catId, searchQuery, likeQuery }) => {
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
    const [filterProducts, setFilterProducts] = useState();
    const { target } = useContext(TargetContext);

    useEffect(() => {
        products && setFilterProducts(products)

    }, [products]);

    useEffect(() => {
        if (location.search) {
            likeQuery && dispatch(getProductsBySearch(null, likeQuery))
            searchQuery && dispatch(getProductsBySearch(searchQuery, null))
        } else {
            if (title && catId) {
                dispatch(getProducts(target, catId));
            }
            !title && dispatch(getProducts(target));
        }
    }, [dispatch, catId, title, target, location.search, likeQuery]);

    useEffect(() => {
        if (errors.length) {
            let productsError = errors.filter((err) => err.type === "productsList");
            setListError(...productsError);
        } else {
            setListError(undefined);
        }
    }, [errors]);

    useEffect(() => {
        if (products) {
            (catId || searchQuery)
                ? setFilterProducts(products)
                : setFilterProducts(products.slice(0, 8));
        }
    }, [products, catId]);

    useEffect(() => {
        (catId || searchQuery) &&
            products &&
            setFilterProducts(
                products.filter((item) => {
                    return Object.entries(filter).every(([key, value]) => {
                        return value.length
                            ? [...value].some((v) => item[key].includes(v))
                            : true;
                    });
                })
            );
    }, [filter, catId, searchQuery, products]);

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
        if (catId || searchQuery) {
            if (sort === "asc") sortPriceByAsc();
            if (sort === "desc") sortPriceByDesc();
            if (sort === "newest") sortByNewest();
        }
    }, [sort, catId, sortPriceByAsc, sortPriceByDesc, sortByNewest, searchQuery]);

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

    if (products && !products.length) {
        (!isAtHome && !likeQuery) && navigate(
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
        )
        if (likeQuery) return (<div className={classes.emptyRoot}>
            <FavoriteBorderOutlined fontSize="large" style={{ marginBottom: 16 }} />
            <Typography variant="h4" gutterBottom>
                You have no Saved items
            </Typography>
            <Typography variant='body1' gutterBottom>
                {`Start saving as you shop by selecting the little heart.`}
            </Typography>
            <Button variant="contained" color="primary" component={Link} to={"/"}>
                Start shopping
            </Button>
        </div>);
    }

    return (
        <>
            {!isAtHome && !likeQuery && (
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
            {
                likeQuery && <Typography variant={"h2"} component="h2" className={classes.title}>
                    Your Wishlist
                </Typography>
            }
            {isAtHome && <SectionTitle title="Shop by newest" />}
            <Container maxWidth="xl">
                {filterProducts?.length ? (<div className={classes.root}>
                    <ImageList
                        //rowHeight={screenIsAtMost("md") ? 350 : 400}
                        rowHeight={screenIsAtMost("md") ? 'auto' : 'auto'}
                        cols={screenIsAtMost("md") ? (screenIsAtMost("sm") ? 1 : 2) : 4}
                        gap={16}
                        className={classes.imageList}
                    >
                        {filterProducts &&
                            filterProducts.map((product) => {
                                return <Product key={product._id} product={product} />;
                            })}
                    </ImageList>
                </div>) : (<div className={`${classes.emptyRoot} ${classes.emptyFilter}`}>
                    <Typography>0 styles found</Typography>
                </div>)}
            </Container>
        </>
    );
};

export default Products;
