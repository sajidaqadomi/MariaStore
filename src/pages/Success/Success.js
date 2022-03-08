import { Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { emptyCartByUserId } from "../../actions/cart";

import * as api from "../../api/order";
import useStyles from "./styles";

const Success = () => {
    const classes = useStyles();
    const location = useLocation();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.auth);

    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
        const createOrder = async () => {
            const orders = cart?.products.map((orderItem) => orderItem._id);

            try {
                const { data } = await api.postOrder({
                    userId: user.id,
                    products: orders,
                    amount: cart.total,
                    address: location.state.stripeData.billing_details.address,
                });
                if (data) {
                    setOrderId(data.id)
                    dispatch(emptyCartByUserId(user.id))
                };
            } catch (error) {
                console.log(error);
            }
        };

        if (cart && location.state && user) {
            createOrder();
        }
    }, [cart, location, user]);
    return (
        <div className={classes.root}>
            <Typography gutterBottom>
                {orderId
                    ? `Order has been created successfully. Your order number is ${orderId}`
                    : `Successfull. Your order is being prepared...`}
            </Typography>
            <Button variant="contained" color="primary" component={Link} to={"/"}>
                Go to Homepage
            </Button>
        </div>
    );
};

export default Success;
