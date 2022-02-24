import {
    AppBar,
    Badge,
    Container,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import useStyles from "./styles";
import * as storage from "../../../utility/cache";
import { signOut } from "../../../actions/user";
import FilterSide from "./FilterSide";
import { TargetContext } from "../../../contexts/TargetContext";

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate()
    const { target } = useContext(TargetContext)
    const {
        cart,
        auth: { user },
    } = useSelector((state) => state);
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {
        let token = storage.get("userToken");
        if (token) {
            let decodeToken = jwt_decode(token);
            if (decodeToken.exp < new Date().getTime() / 1000) logOut();
        }
    }, [location]);

    useEffect(() => {
        let token = storage.get("userToken");
        if (token) {
            navigate(`/home/${target}`)

        }

    }, [user]);

    // const handleChangeSearch = () => {

    // }

    const logOut = () => {
        dispatch(signOut());
    };


    return (
        <>
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.leftSide}>
                        <FilterSide />
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
            <div className={classes.mobArea} >
                <Container maxWidth='xl'>
                    <div className={classes.mobContent}>
                        <FilterSide />
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Navbar;
