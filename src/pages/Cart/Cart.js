import {
    Box,
    Button,
    Container,
    Divider,
    Link,
    Typography,
} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";

import { updateOrderItemQ } from "../../actions/cart";
import useStyles from "./styles";
import { postPayment } from "../../actions/payment";

const STRIPE_KEY = process.env.REACT_APP_STRIPE

const Color = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin: 0 5px;
`;

const Cart = () => {
    const classes = useStyles();
    const { products, total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOrderQuantity = (type, id, Q) => {
        if (type === "inc") {
            Q < 10 && dispatch(updateOrderItemQ(id, { quantity: Q + 1 }));
        }
        if (type === "dec") {
            Q > 1 && dispatch(updateOrderItemQ(id, { quantity: Q - 1 }));
        }
    };

    const onToken = (token) => {
        if (token)
            dispatch(
                postPayment({ tokenId: token.id, amount: total * 100 }, navigate)
            );
    };
    if (!products.length) return "";

    return (
        <Container maxWidth="xl">
            <Typography className={classes.title} variant="h3" component="h2">
                your bag
            </Typography>
            <div className={classes.top}>
                <Button variant="outlined" className={classes.btn}>
                    continue shopping
                </Button>
                <div className={classes.links}>
                    <Link className={classes.link}>shopping bage(2)</Link>
                    <Link className={classes.link}>your wishlist (0)</Link>
                </div>
                <Button variant="contained" className={classes.btn}>
                    checkout now
                </Button>
            </div>
            <div className={classes.bottom}>
                <div className={classes.productsContainer}>
                    {products?.map((item) => (
                        <>
                            <div className={classes.product} key={item._id}>
                                <div className={classes.productDetails}>
                                    <div className={classes.productImg}>
                                        <img
                                            className={classes.img}
                                            src={item.product.img}
                                            alt={item.product.title}
                                        />
                                    </div>
                                    <div className={classes.productInfo}>
                                        <Typography className={classes.name}>
                                            <Box fontWeight="bold" component="span">
                                                Product:
                                            </Box>
                                            {item.product.title}
                                        </Typography>
                                        <Typography className={classes.name}>
                                            <Box fontWeight="bold" component="span">
                                                ID:
                                            </Box>
                                            {item.product?.id}
                                        </Typography>
                                        <Color color={item.selectedColor} />
                                        <Typography className={classes.size}>
                                            <Box fontWeight="bold" component="span">
                                                Size:
                                            </Box>
                                            {item?.selectedSize}
                                        </Typography>
                                    </div>
                                </div>
                                <div className={classes.priceDetails}>
                                    <div className={classes.amountContainer}>
                                        <Add
                                            onClick={() =>
                                                handleOrderQuantity("inc", item.id, item.quantity)
                                            }
                                        />
                                        <Typography component="span" className={classes.amount}>
                                            {item.quantity}
                                        </Typography>
                                        <Remove
                                            onClick={() =>
                                                handleOrderQuantity("dec", item.id, item.quantity)
                                            }
                                        />
                                    </div>
                                    <Typography className={classes.price}>
                                        $ {item.total}
                                    </Typography>
                                </div>
                            </div>
                            <Divider />
                        </>
                    ))}
                </div>
                <div className={classes.summary}>
                    <Typography variant="h3" className={classes.summaryTitle}>
                        ORDER SUMMARY
                    </Typography>
                    <div className={classes.summaryItem}>
                        <Typography variant="body2" component="span">
                            Subtotal
                        </Typography>
                        <Typography variant="body2" component="span">
                            $ {total}
                        </Typography>
                    </div>
                    <div className={classes.summaryItem}>
                        <Typography variant="body2" component="span">
                            {" "}
                            Estimated Shipping
                        </Typography>
                        <Typography variant="body2" component="span">
                            $ 5.90
                        </Typography>
                    </div>
                    <div className={classes.summaryItem}>
                        <Typography variant="body2" component="span">
                            Shipping Discount
                        </Typography>
                        <Typography variant="body2" component="span">
                            $ 5.90
                        </Typography>
                    </div>
                    <div className={`${classes.summaryItem} `}>
                        <Typography
                            className={classes.total}
                            variant="body2"
                            component="span"
                        >
                            Total
                        </Typography>
                        <Typography
                            className={classes.total}
                            variant="body2"
                            component="span"
                        >
                            $ {total}
                        </Typography>
                    </div>
                    <StripeCheckout
                        stripeKey={STRIPE_KEY}
                        token={onToken}
                        name="Maria Store"
                        billingAddress
                        shippingAddress
                        description={`Your total is $ ${total}`}
                        amount={total * 100}
                    >
                        <Button variant="contained" className={classes.btn} fullWidth>
                            CHECKOUT NOW
                        </Button>
                    </StripeCheckout>
                </div>
            </div>
        </Container>
    );
};

export default Cart;
