import { Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { postOrder } from "../../actions/order";

import * as api from "../../api/order";

import useStyles from "./styles";

const Success = () => {
    const classes = useStyles();
    const location = useLocation();
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [orderId, setOrderId] = useState(null);

    console.log(location, "location");

    useEffect(() => {
        const createOrder = async () => {
            const orders = cart?.products.map((orderItem) => orderItem.product.id);

            try {
                const { data } = await api.postOrder({
                    userId: "61afbe1ece5cc5dd40415532",
                    orders,
                    amount: cart.total,
                    address: location.state.stripeData.billing_details.address,
                });
                if (data) setOrderId(data.id);
            } catch (error) {
                console.log(error);
            }
        };

        if (cart && location.state) {
            createOrder();
        }
    }, [cart, location]);
    return (
        <div className={classes.root}>
            <Typography gutterBottom>
                {orderId ? `Order has been created successfully. Your order number is ${orderId}` :
                    `Successfull. Your order is being prepared...`
                }
            </Typography>
            <Button variant="contained" color="primary" component={Link} to={'/home'}>
                Go to Homepage
            </Button>
        </div>
    );
};

export default Success;
