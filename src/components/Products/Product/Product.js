import { Avatar, ImageListItem } from "@material-ui/core";
import {
    FavoriteBorder,
    Search,
    ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";

import useStyles from "./styles";

const Product = ({ product: { img }, ...rest }) => {
    const classes = useStyles();
    return (
        <ImageListItem cols={2} {...rest}>
            <div className={classes.container}>
                <img src={img} alt={"productImg"} className={classes.img} />
                <div className={classes.iconsLayer}>
                    <Avatar
                        className={classes.avatar}
                        onClick={() => console.log("click")}
                    >
                        <ShoppingCartOutlined className={classes.icon} />
                    </Avatar>
                    <Avatar
                        className={classes.avatar}
                        onClick={() => console.log("click")}
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
