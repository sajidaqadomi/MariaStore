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
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";

import useStyles from "./styles";
import * as storage from "../../utility/cache";
import { signOut } from "../../actions/user";

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {
        cart: { quantity },
        auth: { user },
    } = useSelector((state) => state);
    const location = useLocation();

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
    return (
        <>
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.leftSide}>
                        <Select value={"en"} onChange={""} className={classes.select}>
                            <MenuItem value={"en"}>En</MenuItem>
                            <MenuItem value={"ar"}>Arabic</MenuItem>
                        </Select>
                        <div className={classes.search}>
                            <InputBase placeholder="Search" className={classes.inputSearch} />
                            <SearchOutlined className={classes.searchIcon} />
                        </div>
                    </div>
                    <div className={classes.centerSide}>
                        <Typography
                            component={Link}
                            to="/"
                            variant="h3"
                            className={classes.logo}
                        >
                            Maria.
                        </Typography>
                    </div>
                    <div className={classes.rightSide}>
                        {user ? (
                            <>
                                <Link className={classes.link} to="/" onClick={logOut}>
                                    Sign Out
                                </Link>
                                <Badge
                                    badgeContent={quantity}
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
            </AppBar >
            {(location.pathname !== '/register') && (location.pathname !== '/login') && <div className={classes.offset} />}
        </>
    );
};

export default Navbar;
