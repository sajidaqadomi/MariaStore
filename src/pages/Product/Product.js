import React, { useEffect, useState } from "react";
import {
    Button,
    Container,
    MenuItem,
    Select,
    Typography,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { getProductsById } from "../../actions/products";
import { addToCart } from "../../actions/cart";
import { AmountController, ErrorMessage, Loading } from "../../components";
import { FilterColor } from "../../utility/styledComponent";

const Product = () => {
    const dispatch = useDispatch();
    const { product, isLoading } = useSelector((state) => state.products);
    const { errors } = useSelector((state) => state.dataStatus);
    const { id: cartId } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.auth);
    const [productError, setProductError] = useState(undefined);

    const [selectedColor, setColor] = useState("");
    const [size, setSize] = useState("Please select");
    const [quantity, setQuantity] = useState(1);

    const classes = useStyles();
    const { id } = useParams();

    useEffect(() => {
        if (id) dispatch(getProductsById(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (errors?.length) {
            //console.log(errors, "errors");
            let err = errors.filter((item) => item.type === "product");

            err.length && setProductError(err[0]);
        }
    }, [errors]);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity((q) => q - 1);
        } else {
            quantity < 10 && setQuantity((q) => q + 1);
        }
    };

    const handleAddToCart = () => {
        dispatch(
            addToCart(cartId, {
                product: product.id,
                selectedColor: selectedColor,
                selectedSize: size,
                quantity,
            })
        );
    };

    if (isLoading) return <Loading />;
    if (productError)
        return (
            <ErrorMessage msg={productError.error} title={productError.errorTitle} />
        );
    return (
        <Container maxWidth="xl">
            <div className={classes.productContent}>
                <div className={classes.imgContainer}>
                    <img
                        src={product?.img}
                        alt={product?.title}
                        className={classes.img}
                    />
                </div>
                <div className={classes.productInfo}>
                    <Typography variant="h2" component="h2" className={classes.title}>
                        {product?.title}
                    </Typography>
                    <Typography variant="body1" className={classes.desc} component="p">
                        {product?.desc}
                    </Typography>
                    <Typography variant="body2" className={classes.price}>
                        $ {product?.price}
                    </Typography>
                    <div className={classes.filterContainer}>
                        <div className={classes.filter}>
                            <Typography variant="caption" className={classes.filterTitle}>
                                Color
                            </Typography>
                            <div className={classes.colors}>
                                {product?.color?.map((color) => (
                                    <FilterColor
                                        key={color}
                                        color={color}
                                        selected={color === selectedColor}
                                        onClick={() => setColor(color)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className={classes.filter}>
                            <Typography variant="caption" className={classes.filterTitle}>
                                Size
                            </Typography>
                            <Select
                                className={classes.select}
                                value={size}
                                // label="Color"
                                variant="outlined"
                                fullWidth
                                // displayEmpty
                                onChange={(e) => setSize(e.target.value)}
                            >
                                <MenuItem value="Please select" disabled hidden>
                                    Please select
                                </MenuItem>
                                {product?.size?.map((size) => (
                                    <MenuItem key={size} value={size}>
                                        {size}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div className={classes.addContainer}>
                        <AmountController
                            quantity={quantity}
                            handleQuantity={handleQuantity}
                            style={{ flex: 1 }}
                        />
                        <Button
                            variant="outlined"
                            className={classes.btn}
                            disabled={!user || !selectedColor || size === "Please select"}
                            onClick={handleAddToCart}
                        >
                            add to cart
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Product;
