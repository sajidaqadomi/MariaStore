import { Avatar, ImageListItem } from "@material-ui/core";
import {
    FavoriteBorder,
    Search,
    ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Product = ({ product: { img, id }, ...rest }) => {
    // console.log(img, id)
    const classes = useStyles({ img });
    return (
        <ImageListItem cols={2} {...rest}>
            <div className={classes.container}>
                <div className={classes.imgContainer}>
                    {/* <img src={img} alt={"productImg"} className={classes.img} /> */}
                </div>

                <div className={classes.circle} />
                <div className={classes.iconsLayer}>
                    <Avatar
                        className={classes.avatar}
                        onClick={() => console.log("click")}
                    >
                        <ShoppingCartOutlined className={classes.icon} />
                    </Avatar>
                    <Avatar
                        className={classes.avatar}
                        component={Link}
                        to={`/product/${id}`}
                    >
                        <Search className={classes.icon} />
                    </Avatar>
                    <Avatar
                        className={classes.avatar}
                        onClick={() => console.log("click")}
                    >
                        <FavoriteBorder className={classes.icon} />
                    </Avatar>
                </div>
            </div>
        </ImageListItem>
    );
};

export default Product;
