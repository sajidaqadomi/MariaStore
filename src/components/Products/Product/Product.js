import {
    Avatar,
    Button,
    IconButton,
    ImageListItem,
    MenuItem,
    Paper,
    Select,
    Typography,
} from "@material-ui/core";
import {
    Delete,
    Favorite,
    FavoriteBorder,
    ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

import { addToCart } from "../../../actions/cart";
import { likeProductsById } from "../../../actions/products";
import { useSearch } from "../../../hooks/useSearch";
import { FilterColor } from "../../../utility/styledComponent";
import AmountController from "../../AmountController";
import useStyles from "./styles";


const Product = ({ product, ...rest }) => {
    const { img, _id, likes, desc, price, color, size: productSize } = product;
    const { likeQuery } = useSearch();
    const classes = useStyles({ img });
    const [isLike, setIsLike] = useState(false);
    const dispatch = useDispatch();
    const {
        auth: { user },
    } = useSelector((state) => state);
    const { id: cartId } = useSelector((state) => state.cart);

    const [selectedColor, setColor] = useState("");
    const [size, setSize] = useState("Select Size");
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (user?.id && likes) {
            const likeIndex = likes.findIndex((like) => like === user.id);
            likeIndex >= 0 ? setIsLike(true) : setIsLike(false);
        }
    }, [user, likes]);

    const handleAddToCart = () => {
        dispatch(
            addToCart(cartId, {
                product: _id,
                selectedColor: selectedColor,
                selectedSize: size,
                quantity,
            })
        );

        /**/
        dispatch(likeProductsById(_id, likeQuery))//disLike
    };

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity((q) => q - 1);
        } else {
            quantity < 10 && setQuantity((q) => q + 1);
        }
    };

    return (
        <ImageListItem cols={2} {...rest}>
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className={classes.container}>
                    <LazyLoad height={366} style={{ width: '100%' }} once> <div className={classes.imgContainer}><img src={img} alt='img' style={{ width: '100%', height: '100%' }} /></div></LazyLoad>

                    {!likeQuery && (
                        <div className={classes.iconsLayer}>
                            <Avatar
                                className={classes.avatar}
                                component={Link}
                                to={`/product/${_id}`}
                            >
                                <ShoppingCartOutlined className={classes.icon} />
                            </Avatar>
                            <Avatar
                                className={classes.avatar}
                                component={IconButton}
                                disabled={!user}
                                onClick={() => dispatch(likeProductsById(_id))}
                            >
                                {isLike ? (
                                    <Favorite />
                                ) : (
                                    <FavoriteBorder className={classes.icon} />
                                )}
                            </Avatar>
                        </div>
                    )}
                    {likeQuery && (
                        <div className={`${classes.iconsLayer} ${classes.deleteLayer}`}>
                            <Avatar
                                className={`${classes.avatar} ${classes.deleteAvatar}`}
                                component={IconButton}
                                onClick={() => dispatch(likeProductsById(_id, likeQuery))}
                            // component={Link}
                            >
                                <Delete className={classes.icon} />
                            </Avatar>
                        </div>
                    )}
                </div>
                {likeQuery && (
                    <Paper square className={classes.productDetails} elevation={0}>
                        <Typography variant="body2" gutterBottom className={classes.title}>
                            {desc}
                        </Typography>
                        <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="body2" gutterBottom className={classes.price}>
                                $ {price}
                            </Typography>
                            <AmountController quantity={quantity} handleQuantity={handleQuantity} />
                        </div>
                        <div className={classes.colors}>
                            {color?.map((color) => (
                                <FilterColor
                                    key={color}
                                    color={color}
                                    selected={color === selectedColor}
                                    onClick={() => setColor(color)}
                                />
                            ))}
                        </div>
                        <Select
                            className={classes.select}
                            value={size}
                            // label="Color"
                            variant="outlined"
                            // displayEmpty
                            fullWidth
                            onChange={(e) => setSize(e.target.value)}
                        >
                            <MenuItem value="Select Size" disabled hidden>
                                Select Size
                            </MenuItem>
                            {productSize?.map((size) => (
                                <MenuItem key={size} value={size}>
                                    {size}
                                </MenuItem>
                            ))}
                        </Select>

                        <Button
                            variant="outlined"
                            className={classes.btn}
                            disabled={!selectedColor || size === "Select Size"}
                            fullWidth
                            onClick={handleAddToCart}
                        >
                            add to cart
                        </Button>
                    </Paper>
                )}
            </div>
        </ImageListItem>
    );
};

export default Product;
