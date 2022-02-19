import {
    AppBar,
    Badge,
    InputBase,
    MenuItem,
    Select,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import useStyles from "./styles";
import * as storage from "../../utility/cache";
import { signOut } from "../../actions/user";
// import { getProducts } from "../../actions/products";
// import { getCategories } from "../../actions/categories";
import { BottomNav } from "..";
// import { mainCategories } from '../../utility/mainCategories';

const Navbar = ({ hanleChangeTarget, target = 'women' }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    // const [target, setTarget] = useState('women')
    // const [mainCat, setMainCat] = useState(0);

    const {
        cart,
        auth: { user },
    } = useSelector((state) => state);
    const location = useLocation();
    const navigate = useNavigate()
    // console.log(cart, user, "cart")
    useEffect(() => {
        let token = storage.get("userToken");
        if (token) {
            let decodeToken = jwt_decode(token);
            if (decodeToken.exp < new Date().getTime() / 1000) logOut();
        }
    }, [location]);

    const logOut = () => {
        dispatch(signOut());
    };

    // const hanleChangeTarget = (e) => {
    //     let target = e.target.value
    //     setTarget((c) => target)
    // }

    // const handleChangeMainCat = (e, v) => {
    //     setMainCat((prev) => v)

    // }

    // useEffect(() => {
    //     if (target) {

    //         // console.log('target', target, mainCategories[mainCat])
    //         navigate(`/home/${target}`)
    //         dispatch(getProducts(target))

    //     }

    // }, [target]);

    // useEffect(() => {
    //     if (target && mainCategories[mainCat]) {

    //         console.log('target', target, mainCategories[mainCat])
    //         dispatch(getCategories({ cat: mainCategories[mainCat], targetGender: target }))

    //     }

    // }, [target, mainCat]);
    return (
        <>
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.leftSide}>
                        <Select value={target} onChange={hanleChangeTarget} className={classes.select}>
                            <MenuItem value={"women"}>Women</MenuItem>
                            <MenuItem value={"men"}>Men</MenuItem>
                        </Select>
                        <div className={classes.search}>
                            <InputBase placeholder="Search" className={classes.inputSearch} />
                            <SearchOutlined className={classes.searchIcon} />
                        </div>
                    </div>
                    <div className={classes.centerSide}>
                        <Typography
                            component={Link}
                            to={`/home/${target}`}
                            variant="h3"
                            className={classes.logo}
                        >
                            Maria.
                        </Typography>
                    </div>
                    <div className={classes.rightSide}>
                        {user ? (
                            <>
                                <Link className={classes.link} to="#" onClick={logOut}>
                                    Sign Out
                                </Link>
                                <Badge
                                    badgeContent={cart.quantity}
                                    color="primary"
                                    className={classes.badge}
                                    component={Link}
                                    to="/cart"
                                >
                                    <ShoppingCartOutlined className={classes.shoppingIcon} />
                                </Badge>
                            </>
                        ) : (
                            <>
                                <Link className={classes.link} to="/register">
                                    register
                                </Link>
                                <Link className={classes.link} to="/login">
                                    sign in
                                </Link>
                            </>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
            {location.pathname !== "/register" && location.pathname !== "/login" && (
                <div className={classes.offset} />
            )}
        </>
    );
};

export default Navbar;
