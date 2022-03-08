import { Avatar, Button, IconButton, ImageListItem } from "@material-ui/core";
import {
    FavoriteBorder,
    Search,
    ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Product = ({ product: { img, _id }, ...rest }) => {
    const classes = useStyles({ img });
    const {
        auth: { user }
    } = useSelector((state) => state);

    // useEffect(() => {
    //     console.log(user, 'user')
    // }, [user]);

    // useEffect(() => {
    //     if (id) console.log('productid', id)

    // }, [id]);



    return (
        <ImageListItem cols={2} {...rest}>
            <div className={classes.container}>
                <div className={classes.imgContainer}>
                    {/* <img src={img} alt={"productImg"} className={classes.img} /> */}
                </div>

                {/* <div className={classes.circle} /> */}
                {_id && <div className={classes.iconsLayer}>
                    <Avatar
                        className={classes.avatar}
                        component={Link}
                        to={`/product/${_id}`}
                    // className={classes.avatar}
                    // onClick={() => console.log("click")}
                    >
                        <ShoppingCartOutlined className={classes.icon} />
                    </Avatar>
                    <Avatar
                        className={classes.avatar}
                        component={IconButton}
                        disabled={!user}

                        onClick={() => console.log("click")}
                    >
                        <FavoriteBorder className={classes.icon} />

                    </Avatar>
                    {/* <Avatar
                        className={classes.avatar}
                        onClick={() => console.log("click")}
                    >
                        <FavoriteBorder className={classes.icon} />
                    </Avatar> */}
                </div>}
            </div>
        </ImageListItem>
    );
};

export default Product;
